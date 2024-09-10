<template>
    <section class="vh-100">
        <div class="title">
           <h2>
            Login to your <span>
                account
            </span>
           </h2> 
        </div>
  <div class="container-fluid h-custom mb-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
        class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form @submit.prevent="submitLogin">
          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label text-start" for="form3Example3">Phone Number</label>
            <input type="number" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter your phone number" v-model="phoneNumber" required />
          </div>

          <!-- Password input -->
          <div data-mdb-input-init class="form-outline mb-3" v-if="otpSent">
            <label class="form-label text-start" for="form3Example4">OTP</label>
            <input type="text" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter OTP" v-model="otp" required/>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
                <button type="submit">{{ otpSent ? 'Verify OTP' : 'Send OTP' }}</button>
          </div>
          <p v-if="error" class="error-message">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    <!-- Copyright -->
    <div class="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
    <!-- Copyright -->
  </div>
</section>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';
  
  const phoneNumber = ref('');
  const otp = ref('');
  const otpSent = ref(false);
  const error = ref('');
  const authStore = useAuthStore();
  const router = useRouter();
  
  const submitLogin = async () => {
    try {
      if (!otpSent.value) {
        otpSent.value = true;
        error.value = '';
      } else {
        await authStore.login(phoneNumber.value, otp.value);
        router.push('/');
      }
    } catch (e) {
      error.value = 'Failed to login. Please try again.';
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 1em;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .form-group {
    margin-bottom: 1em;
  }
  
  label {
    display: block;
    margin-bottom: 0.5em;
  }
  
  input {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #1266f1;
    color: white;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: #005582;
  }
  
  .error-message {
    color: red;
  }
  .title span{
    color: #1266f1;
  }

  .divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}

@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}
.title h2{
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 70px;
}
  </style>
  