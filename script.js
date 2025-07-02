// Simulación de base de datos local con localStorage
function registrarse() {
  const user = document.getElementById('register-username').value;
  const pass = document.getElementById('register-password').value;

  if (user && pass) {
    if (localStorage.getItem(user)) {
      alert("Este usuario ya existe.");
    } else {
      localStorage.setItem(user, pass);
      alert("¡Cuenta creada con éxito!");
      mostrarLogin();
    }
  } else {
    alert("Por favor completa todos los campos.");
  }
}

function login() {
  const user = document.getElementById('login-username').value;
  const pass = document.getElementById('login-password').value;

  const storedPass = localStorage.getItem(user);

  if (storedPass === pass) {
    alert("¡Bienvenido, " + user + "!");
    // Aquí iría el paso al menú o juego
    // window.location.href = "juego.html";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

function mostrarRegistro() {
  document.getElementById('form-login').style.display = 'none';
  document.getElementById('form-register').style.display = 'block';
}

function mostrarLogin() {
  document.getElementById('form-register').style.display = 'none';
  document.getElementById('form-login').style.display = 'block';
}

// script.js

// Importación de Firebase, ya incluido en index.html
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Referencias a los formularios
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');

// Iniciar Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función de registro
async function registrarse() {
  const user = document.getElementById("register-username").value;
  const pass = document.getElementById("register-password").value;

  try {
    await createUserWithEmailAndPassword(auth, user, pass);
    alert("¡Cuenta creada con éxito!");
    mostrarLogin();  // Mostrar formulario de login después de registrarse
  } catch (error) {
    alert("Error al registrar la cuenta: " + error.message);
  }
}

// Función de login
async function login() {
  const user = document.getElementById("login-username").value;
  const pass = document.getElementById("login-password").value;

  try {
    await signInWithEmailAndPassword(auth, user, pass);
    alert("¡Bienvenido!");
    // Aquí puedes redirigir al jugador a la página principal
    // window.location.href = "juego.html";
  } catch (error) {
    alert("Error al iniciar sesión: " + error.message);
  }
}

// Funciones para mostrar formularios
function mostrarLogin() {
  formRegister.style.display = 'none';
  formLogin.style.display = 'block';
}

function mostrarRegistro() {
  formLogin.style.display = 'none';
  formRegister.style.display = 'block';
}
