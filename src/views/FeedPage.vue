<template>
  <Navbar/>
  <div class="container" style="margin-top: 65px; padding-top: 30px;">
    <div class="row">
      <div class="col-3" style="position: sticky;">
        <div class="profile-box">
          <ProfilePage />
        </div>
      </div>
      <div class="col-6">
        <div class="feed-box">
          <div class="feed-box-row">
            <CreatePostPage />
          </div>
          
          <!-- feed start -->
            <div class="myfeed1">

                <div class="myfeed" v-if="posts.length === 0">
                  <p>No posts available. Start by creating a post!</p>
                </div>
              <Post v-for="post in posts" :key="post.id" :post="post" />
            </div>
        </div>
        <!-- feed end -->
      </div>   
    <div class="col-3">
      <div class="right-box">
        <div class="img-right">
          <img src="https://img.freepik.com/premium-photo/3d-rendering-linkedin-badge-surrounded-by-badges-most-important-social-networks-vertical-shot_284880-532.jpg">
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { usePostStore } from '../stores/post';
import Post from '../components/Post.vue';
import ProfilePage from '../views/ProfilePage.vue';
import CreatePostPage from '../views/CreatePostPage.vue';
import Navbar from '../components/Navbar.vue';

const postStore = usePostStore();
const posts = computed(() => postStore.posts);
</script>

<style scoped>
/* Add your styles here */
.feed-box-row{
  background: #fff;
    padding: 25px;
    margin-bottom: 15px;
}
.feed-box-row h1{}
.feed-box .form-group textarea.form-control{
  box-shadow: none;
  outline: none;
}
.myfeed{
  background: #fff;
    padding: 25px;
}
.myfeed p{
  font-size:15px;
  color: #666;
}
.profile-box, .right-box{
    position: sticky;
    top: 87px;
  }
  .img-right{}
  .img-right img{
    width: 100%;
    height: 400px;
    border-radius: 10px;
  }
</style>