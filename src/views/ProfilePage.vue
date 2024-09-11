<template>
     
  
    <!--  -->
    <div class="card">
          <div class="rounded-top text-white d-flex flex-row profile-box">
            <div class="profile-img">
              <img src="https://play-lh.googleusercontent.com/_qUtBpMVsGY-CLPx2DreAENHAbr4KHwBGn2w_3jhGSzoRVFRKn0SXUaK0wXSU0SJ7A=w240-h480-rw"
                alt="Generic placeholder image">
            </div>
          </div>
          <div class="user-name">
              <h5>{{ user?.name }}</h5>
              <p>Delhi</p>
           </div>
          <div class="follow-box">
            <div class="d-flex text-center text-body">
              <div class="follo-box">
                <p class="mb-1 h5">1026</p>
                <span class="small text-muted mb-0">Followers</span>
              </div>
              <div class="follo-box">
                <p class="mb-1 h5">478</p>
                <span class="small text-muted mb-0">Following</span>
              </div>
            </div>
          </div>
          <div class="profile-about">           
               <h4>About</h4>
              <div class="bg-body-tertiary">
                <p>Software Developer</p>
                <p>Lives in Delhi</p>
              </div>
          </div>
        </div>
    <!--  -->
 
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
  <style scoped>
  .profile-img{
    width: 140px;
    height: 140px;
    display: block;
    text-align: center;
    margin: auto;
    position: absolute;
    bottom: -70px;
    left: 0px;
    right: 0px;
    border-radius: 100%;
  }
  .profile-img img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
  .profile-box{
    background-color: #000; height:100px;
    position: relative;
  }
  .user-name{
    margin-top: 80px;
    border-bottom: 1px solid #ddd;
  }
  .user-name h5{
    font-size: 18px;
    color: #000;
    font-weight: 600;
    margin-bottom: 0px;
  }
  .user-name p{
    font-size: 14px;
    color: #666;
    padding-bottom: 0px;
  }
  .follow-box{
    margin-top: 15px;
  }
  .follow-box .d-flex{   
    justify-content: center;
    gap: 10px;
  }
  .follo-box p{
    font-size: 22px;
    color: #000;
    font-weight: 600;
    margin-bottom: 0px;
  }
  .follo-box  span{
    font-size: 12px;
  }
  .follo-box{
    
    background: #f4f4f4;
    padding: 10px 15px;
}

  .follo-box:last-child{
    border-right: 0px solid #ddd;

  }
  .profile-about{
    margin-top: 15px;
  }
  .profile-about h4{
    font-size: 18px;
    text-align: start;
    padding: 0px 0px 8px;
    color: #000;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
    margin: 0px 20px 14px;
  }
  .profile-about .bg-body-tertiary{}
  .profile-about .bg-body-tertiary p{
    font-size: 14px;
    padding-bottom: 5px;
    margin: 0px 20px 5px;
    text-align: start;
    border-bottom: 1px solid #ededed;
  }
  .profile-about .bg-body-tertiary p:last-child{
    border-bottom: 0px solid #ededed;
  }

</style>
  