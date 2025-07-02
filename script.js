// script.js

// Referencias a los formularios
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');
const formThankYou = document.getElementById('thank-you');

// Función para registrar un usuario
async function registrarse() {
  const user = document.getElementById("register-username").value;
  const pass = document.getElementById("register-password").value;

  try {
    // Registra el usuario (aquí se simula, en tu caso con Firebase puedes registrar en la base de datos)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulación de registro con delay
    alert("¡Cuenta creada con éxito!");
    
    // Mostrar pantalla de "Gracias por registrarte"
    formRegister.style.display = 'none';
    formThankYou.style.display = 'block';
  } catch (error) {
    alert("Error al crear la cuenta: " + error.message);
  }
}

// Función para hacer login
async function login() {
  const user = document.getElementById("login-username").value;
  const pass = document.getElementById("login-password").value;

  try {
    // Inicia sesión con el usuario y la contraseña (simulado aquí)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulación de login con delay
    alert("¡Bienvenido!");

    // Mostrar pantalla de "Gracias por registrarte"
    formLogin.style.display = 'none';
    formThankYou.style.display = 'block';
  } catch (error) {
    alert("Error al iniciar sesión: " + error.message);
  }
}

// Función para mostrar el formulario de login
function mostrarLogin() {
  formRegister.style.display = 'none';
  formLogin.style.display = 'block';
}

// Función para mostrar el formulario de registro
function mostrarRegistro() {
  formLogin.style.display = 'none';
  formRegister.style.display = 'block';
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
