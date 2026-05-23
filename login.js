import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider, signInWithPopup,
  sendEmailVerification,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// import {  } from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

//  🔥 Firebase Config (paste yours here)
const firebaseConfig = {
  apiKey: "AIzaSyBExYmu-feHogQi4WkCsJfE8bcriIfK-TA",
  authDomain: "practice-login-be38b.firebaseapp.com",
  projectId: "practice-login-be38b",
  storageBucket: "practice-login-be38b.firebasestorage.app",
  messagingSenderId: "533337496677",
  appId: "1:533337496677:web:73640d2c472261a9cafa8c"
};

// 🔥 Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// const userName = document.getElementById('userName')
const email = document.getElementById("email");
const password = document.getElementById("password");

const loginBtn = document.getElementById("login");


// googleBtn.addEventListener('click', () => {
//   signInWithPopup(auth, provider)
//     .then((res) => {
//       console.log(res.user)
//       alert('signd In innnnnnng')
//     })
//     .catch((err) => {
//       console.log(err.message)
//     })
// })


function togglePass() {
  const inp = document.getElementById('pw-input');
  const ico = document.getElementById('eye-icon');
  if (inp.type === 'password') {
    inp.type = 'text';
    ico.className = 'ti ti-eye-off text-base';
  } else {
    inp.type = 'password';
    ico.className = 'ti ti-eye text-base';
  }
}

if (loginBtn) {
  loginBtn.addEventListener('click', async (e) => {
    console.log('from login btn')
    const txt = document.getElementById('btn-text');
    const ico = document.getElementById('btn-icon');
    
    try {
      // CREATE USER
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
      loginBtn.disabled = true;
      txt.textContent = 'Logging in ....';
      ico.className = 'ti ti-loader-2 text-base animate-spin';
      // GET USER
      const user = userCredential.user;
      // SEND VERIFICATION EMAIL
      if (user) {
        sessionStorage.setItem('user_email', user.email)
        loginBtn.style.background = '#0F6E56';
        txt.textContent = 'Logged in Successful!';
        ico.className = 'ti ti-check text-base';

        setTimeout(() => {
          txt.textContent = 'Redirecting to home page';
        //   window.location.href = "home.html";
        }, 1800);
      }


      // OPTIONAL REDIRECT
      // 
    }
    catch (err) {

      alert(err.message);
      console.log(err);

    }

  })

}


