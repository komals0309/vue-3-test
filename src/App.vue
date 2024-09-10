<template>
  <div id="app">
   <!--Main Navigation-->
  <!-- Sidebar -->
  <nav
  v-if="isAuthenticated"
       id="sidebarMenu"
       class="collapse d-lg-block sidebar collapse"
       >
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <a
           href="#"
           class="list-group-item list-group-item-action py-2 ripple"
           aria-current="true"
           >
           <i class="bi bi-person"></i><span> <router-link to="/">Profile</router-link></span>
        </a>
        <a
           href="#"
           class="list-group-item list-group-item-action py-2 ripple"
           >
           <i class="bi bi-list"></i><span><router-link to="/feed">Feed</router-link></span>
        </a>
        <a
           href="#"
           class="list-group-item list-group-item-action py-2 ripple"
           ><i class="bi bi-file-post"></i><span><router-link to="/create-post">Post</router-link></span></a
          >
      </div>
    </div>
  </nav>
  <!-- Sidebar -->

  <!-- Navbar -->
  <nav
  v-if="isAuthenticated"
       id="main-navbar"
       class="navbar navbar-expand-lg navbar-light fixed-top"
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
        <i class="bi bi-linkedin"></i> Linked
      </a>

      <!-- Right links -->
      <ul class="navbar-nav ms-auto d-flex flex-row">
        <!-- Avatar -->
        <li class="nav-item dropdown">
          <a
             class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
             href="#"
             id="navbarDropdownMenuLink"
             role="button"
             data-mdb-toggle="dropdown"
             aria-expanded="false"
             >
            <img
                 src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                 class="rounded-circle"
                 height="22"
                 alt=""
                 loading="lazy"
                 />
          </a>
        </li>
        <li>
          <button @click="logout">Logout</button>
        </li>
      </ul>
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->

<!--Main Navigation-->

<!--Main layout-->
<main style="margin-top: 58px">
  <div class="pt-4">
<router-view/>
  </div>
</main>
<!--Main layout-->
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useAuthStore } from './stores/auth';
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
  margin-top: 60px;
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
  color: black;
  font-weight: bold;
  background-color: rgb(235 236 238) !important;
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
  border-radius: 4px;
}

button:hover {
  background-color: #005582;
}

main {
  padding: 1em;
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
    background-color: rgb(235 236 238) !important;
    box-shadow: -12px 10px 10px -12px;
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
</style>
