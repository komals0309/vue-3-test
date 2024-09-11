<template>
    <div>
      <!-- <h1>Create Post</h1> -->
      <div class="form-group">
            <textarea class="form-control" placeholder="Hi create your post here..." rows="3" v-model="content"></textarea>
      <button @click="createPost" class="btn btn-primary mt-4">Post</button>

          </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import { usePostStore } from '../stores/post';

  
  const content = ref('');
  const authStore = useAuthStore();
  const postStore = usePostStore();
  
  
  const createPost = () => {
    if (authStore.user && content.value) {
      postStore.createPost(content.value, authStore.user.name);
      content.value = '';
    }
  };
  </script>
  