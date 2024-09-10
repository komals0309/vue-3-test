<template>
      <section class="h-100 gradient-custom-2">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center">
      <div class="col col-lg-9 col-xl-8">
        <div class="card">
          <div class="rounded-top text-white d-flex flex-row" style="background-color: #000; height:200px;">
            <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                style="width: 150px; z-index: 1">
            </div>
            <div class="ms-3" style="margin-top: 130px;">
              <h5>{{ user?.name }}</h5>
              <p>Delhi</p>
            </div>
          </div>
          <div class="p-4 text-black bg-body-tertiary">
            <div class="d-flex justify-content-end text-center py-1 text-body">
              <div class="px-3">
                <p class="mb-1 h5">1026</p>
                <p class="small text-muted mb-0">Followers</p>
              </div>
              <div>
                <p class="mb-1 h5">478</p>
                <p class="small text-muted mb-0">Following</p>
              </div>
            </div>
          </div>
          <div class="card-body p-4 text-black">
            <div class="mb-5  text-body">
              <p class="lead fw-normal mb-1">About</p>
              <div class="p-4 bg-body-tertiary">
                <p class="font-italic mb-1">Software Developer</p>
                <p class="font-italic mb-1">Lives in Delhi</p>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4 text-body">
              <p class="lead fw-normal mb-0">Recent Posts</p>
            </div>
            <div class="row">
                <p v-if="userPosts.length==0">
                No Posts as of now.
              </p>
              <Post v-for="post in userPosts" :key="post.id" :post="post" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import { usePostStore } from '../stores/post';
  import Post from '../components/Post.vue';
  
  const authStore = useAuthStore();
  const postStore = usePostStore();
  const user = authStore.user;
  
  const userPosts = computed(() => {
    return postStore.posts.filter(post => post.author === user?.name);
  });
  </script>
  