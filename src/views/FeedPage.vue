<template>
    <div>
      <h1>My Feed</h1>
      <div v-if="posts.length === 0">
        <p>No posts available. Start by creating a post!</p>
      </div>
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import { usePostStore } from '../stores/post';
  import Post from '../components/Post.vue';
  
  const postStore = usePostStore();
  const posts = computed(() => postStore.posts);
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  