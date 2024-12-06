<template>
  <div class="container">
    <div class="main-body">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="main-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
          <li class="breadcrumb-item active" aria-current="page">User Profile</li>
        </ol>
      </nav>
      <!-- /Breadcrumb -->

      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-3">
                  <h4>{{ user?.name || "User" }}</h4>
                  <p class="text-secondary mb-1">Full Stack Developer</p>
                  <p class="text-muted font-size-sm">Delhi, India</p>
                  <button class="btn btn-primary">Follow</button>
                  <button class="btn btn-outline-primary">Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Full Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user?.name || "Test User" }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user?.email || "Not Available" }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-12">
                  <a class="btn btn-info" href="javascript:void(0)">Edit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const user = computed(() => authStore.user);
onMounted(() => {
  authStore.loadUserFromStorage(); 
});
</script>

  <style scoped>
body {
    margin-top: 20px;
    color: #1a202c;
    text-align: left;
    background-color: #f8f9fa;
    font-family: 'Arial', sans-serif;
}

.main-body {
    padding: 20px;
}

.card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    border: none;
    border-radius: 10px;
}

.card-body {
    padding: 20px;
}

.gutters-sm {
    margin-right: -10px;
    margin-left: -10px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 10px;
    padding-left: 10px;
}

.mb-3, .my-3 {
    margin-bottom: 1.5rem !important;
}

.img-thumbnail {
    border: none;
    border-radius: 50%;
    width: 150px;
}

.text-muted {
    color: #6c757d !important;
}

.text-secondary {
    color: #718096 !important;
}

.progress {
    background-color: #e9ecef;
    border-radius: 5px;
    height: 8px;
}

.progress-bar {
    border-radius: 5px;
}

.btn-primary {
    background-color: #007bff;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
}

.btn-outline-primary {
    color: #007bff;
    border: 1px solid #007bff;
    padding: 10px 20px;
    border-radius: 25px;
}

.btn-info {
    background-color: #17a2b8;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    color: #007bff;
}

h4, h6 {
    margin-bottom: 10px;
}

.breadcrumb {
    background-color: #f8f9fa;
    padding: 10px 15px;
    border-radius: 5px;
}

.breadcrumb-item.active {
    color: #6c757d;
}

.breadcrumb-item a {
    color: #007bff;
    text-decoration: none;
}

.breadcrumb-item a:hover {
    text-decoration: underline;
}

</style>
  