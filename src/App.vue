<template>
  <div id="app">
   <!--Main Navigation-->



<!--Main Navigation-->

<!--Main layout-->
<main>
<router-view/>
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
  border-radius: 4px;
}

button:hover {
  background-color: #005582;
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
</style>
