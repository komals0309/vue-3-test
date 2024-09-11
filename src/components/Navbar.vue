<template>
      <!-- Navbar -->
  <nav
  v-if="isAuthenticated"
       id="main-navbar"
       class="navbar topnav navbar-expand-lg navbar-light fixed-top"
       >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Brand -->
      <a class="navbar-brand" href="#">
        <i class="bi bi-linkedin"></i> LinkedIn
      </a>

      <!-- Right links -->
      <ul class="navbar-nav ms-auto d-flex flex-row">
        <!-- Avatar -->
        <li class="nav-item">
          <a
             class="nav-link d-flex align-items-center"
             >
            <img
                 src="https://play-lh.googleusercontent.com/_qUtBpMVsGY-CLPx2DreAENHAbr4KHwBGn2w_3jhGSzoRVFRKn0SXUaK0wXSU0SJ7A=w240-h480-rw"
                 class="rounded-circle"
                 height="22"
                 alt=""
                 loading="lazy"
                 />
          </a>
        </li>
        <li>
          <button @click="logout" class="logout-btn" text="Logout"><i class="bi bi-box-arrow-right"></i></button>
        </li>
      </ul>
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const isAuthenticated = computed(() => !!authStore.user);

const logout = () => {
  authStore.logout();
  router.push('/login'); // Redirect to the login page
};

// Automatically redirect to login page if not authenticated
if (!isAuthenticated.value) {
  router.push('/login');
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: #f5f5f5;
  padding: 1em;
  border-bottom: 1px solid #ddd;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  margin: 0 1em;
}

nav a {
  text-decoration: none;
  color: #0073b1;
  font-weight: bold;
  padding: 10px;
  text-align: left;
}

nav a.router-link-active {
  color: grey;
}

button {
  background-color: #0073b1;
  color: white;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
}

.sidebar {
    position: fixed;
    top: 56px;
    bottom: 0;
    left: 0;
    padding: 6px 0 0; /* Height of navbar */
    width: 240px;
    z-index: 600;
    box-shadow: 10px 0px 10px -12px;
    background-color: rgb(235 236 238) !important;
  }

  #main-navbar{
    background-color: #fff;
    box-shadow: 0px 6px 10px -11px;
  }
  
  @media (max-width: 991.98px) {
    .sidebar {
      width: 100%;
    }
  }
  .sidebar .active {
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  }
  
  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }
  .topnav{}
  main{
    background-color: rgb(235 236 238) !important;
  }
  .bi-box-arrow-right{
    color: red;
  }
  .logout-btn{
    background-color: white;
  }

  .rounded-circle{
    border-radius: 50% !important;
    width: 100%;
    height: 35px;
  }
</style>