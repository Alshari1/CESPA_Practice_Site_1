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

const userName = document.getElementById('userName')
const email = document.getElementById("email");
const password = document.getElementById("password");

const googleBtn = document.getElementById('googleBtn');
const signupBtn = document.getElementById("signup");



googleBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res.user)
      alert('signd In innnnnnng')
    })
    .catch((err) => {
      console.log(err.message)
    })
})


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

const passwordInput = document.getElementById('password')
passwordInput.addEventListener('keyup', () => {
  updateStrength(passwordInput.value)
})

function updateStrength(val) {
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  const colors = ['', '#E24B4A', '#EF9F27', '#1D9E75', '#0F6E56'];
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const textClr = ['', '#A32D2D', '#854F0B', '#0F6E56', '#04342C'];
  for (let i = 1; i <= 4; i++) {
    document.getElementById('bar' + i).style.background = i <= score ? colors[score] : '#f3f4f6';
  }
  const lbl = document.getElementById('strength-label');
  lbl.textContent = val.length > 0 ? labels[score] : '';
  lbl.style.color = val.length > 0 ? textClr[score] : '';
}

// console.log('from signup btnn')

const signUpBtn = document.getElementById('signup');
if (signUpBtn) {
  signUpBtn.addEventListener('click', async (e) => {
    const agreed = document.getElementById('terms-check').checked;
    const txt = document.getElementById('btn-text');
    const ico = document.getElementById('btn-icon');
    if (!agreed) {
      signUpBtn.style.background = '#A32D2D';
      txt.textContent = 'Please agree to the terms';
      ico.className = 'ti ti-alert-circle text-base';
      setTimeout(() => {
        signUpBtn.style.background = '';
        txt.textContent = 'Create account';
        ico.className = 'ti ti-arrow-right text-base';
      }, 2200);
      return;
    }
    try {
      // CREATE USER
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
      signUpBtn.disabled = true;
      txt.textContent = 'Creating account…';
      ico.className = 'ti ti-loader-2 text-base animate-spin';
      // GET USER
      const user = userCredential.user;
      // SEND VERIFICATION EMAIL
      await sendEmailVerification(user);
      alert("Verification email sent!Firebase verification emails often go to: Spam Promotion Updates especially on Gmail.");
      console.log(user);

      if (true) {
        signUpBtn.style.background = '#0F6E56';
        txt.textContent = 'Account created!';
        ico.className = 'ti ti-check text-base';

        setTimeout(() => {
          txt.textContent = 'Redirecting to Login page';
          window.location.href = "login.html";
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


