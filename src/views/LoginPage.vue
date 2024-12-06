<template>
  <section class="vh-100 login-sec">
    <div class="container-fluid h-custom">
      <div class="container">
        <h2>Linked<span>
            <img class="image-in" src="/src//static/images/t_500x300.jpg" />
          </span></h2>
        <div class="text">
          {{ isSignup ? "Create a new" : "SignIn to your" }} <span>account</span>
          <p>Stay updated on your professional world</p>
        </div>
        <div class="your-input">
          <div class="input">
            <input type="text" name="email" id="email" required v-model="email" />
            <label for="email">Email</label>
          </div>
          <div class="input">
            <input type="password" name="password" id="password" required v-model="password" />
            <label for="password">
              Password
            </label>
          </div>
        </div>
        <button type="submit" @click="isSignup ? submitSignup() : submitLogin()"> {{ isSignup ? "Sign Up" : "Login"
          }}</button>
        <p v-if="error" class="error-message mt-2">{{ error }}</p>
        <p class="join-link" style="cursor: pointer;">
          {{ isSignup ? "Already have an account?" : "Don't have an account?" }}
          <span class="link" @click="toggleMode">
            {{ isSignup ? "Login here" : "Sign up here" }}
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { initializeApp } from "firebase/app";
import { useRouter } from 'vue-router';
import { useAuthStore } from "../stores/auth"; // Adjust path as needed

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeDdYfNjlrzmjRl6o16oqzozA5w4t6Cq0",
  authDomain: "linkedinclone-a8084.firebaseapp.com",
  projectId: "linkedinclone-a8084",
  storageBucket: "linkedinclone-a8084.firebasestorage.app",
  messagingSenderId: "892449513291",
  appId: "1:892449513291:web:c0a3944042a72a87eed2ce",
  measurementId: "G-94C9TE2GX4",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const router = useRouter();
const authStore = useAuthStore();

const email = ref("");
const password = ref("");
const error = ref("");
const isSignup = ref(false);



const toggleMode = () => {
  isSignup.value = !isSignup.value;
  error.value = "";
};


const submitLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    authStore.setUser(email.value); 
    alert("Login successful!");
    router.push("/feed");
  } catch (e: any) {
    console.error("Login error:", e);
    error.value = "Enter valid email/password";
  }
};

const submitSignup = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Account created successfully!");
    isSignup.value = false;
  } catch (e: any) {
    console.error("Signup error:", e);
    error.value = e.message || "Failed to create account. Please try again.";
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

.container {
  width: 320px;
  height: 480px;
  background: #fff;
  box-shadow: 0 10px 15px rgba(179, 179, 179, 0.7);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
}

.container h2 {
  color: #0A66C3;
  font-size: 1.6rem;
}

.container h2 i {
  font-size: 1.8rem;
  padding-left: .1rem;
}

.text p {
  font-size: .8rem;
  padding-top: 0.3rem;
}

.input {
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 0.7em;
}

.your-input input {
  width: 100%;
  height: 50px;
  padding-top: 1.1rem;
  padding-left: 9px;
  outline: none;
  border: 1px solid #8c8c8c;
  border-radius: 3px;
  transition: .2s;
}

.your-input label {
  position: absolute;
  top: 30%;
  left: 10px;
  font-size: 1.1rem;
  color: #8c8c8c;
  transition: .2s;
}

.input input:focus~label,
.input input:valid~label {
  top: 10%;
  font-size: .8rem;
  color: #000;
}

.input input:focus {
  border-width: 2px;
  border-color: #0A66C3;
}

.forgot-password-link {
  width: 140px;
  padding: .2rem;
  text-align: center;
  text-decoration: none;
  font-weight: bolder;
  color: #0A66C3;
  transition: .3s;
  border-radius: 12px;
}

.forgot-password-link:hover {
  background: rgba(10, 102, 195, 0.3);
}

button {
  height: 50px;
  background: #0A66C3;
  outline: none;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 1rem;
  font-weight: bolder;
}

.error-message {
  font-size: 12px;
  color: #d75252;
  font-weight: 700;
}

.join-link {
  text-decoration: none;
  font-weight: bolder;
  color: #0A66C3;
}

.join-now {
  text-decoration: none;
  font-weight: bolder;
  color: #0A66C3;
  border-radius: 12px;
  transition: .3s;
  font-weight: bolder;
  padding: .2rem;
}

.join-now:hover {
  background: rgba(10, 102, 195, 0.3);
}

.image-in {
  width: 10%;
  height: 30px;
  object-fit: contain;
  border-radius: 6px;
}
</style>
