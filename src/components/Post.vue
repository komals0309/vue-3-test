<template>
  <div class="post-box">
    <div class="post-header">
      <div class="post-header-col">
        <div class="media-image">
          <a class="" href="javascript:void(0)">
            <img
              src="https://play-lh.googleusercontent.com/_qUtBpMVsGY-CLPx2DreAENHAbr4KHwBGn2w_3jhGSzoRVFRKn0SXUaK0wXSU0SJ7A=w240-h480-rw"
              alt="..."
            />
            <i></i>
          </a>
        </div>
      </div>
      <div class="post-header-col">
         <h4>   {{ post.author }}</h4>
      </div>
    </div>
    <div class="post-content">
        <p>{{ post.content }}</p>
    </div>
    <div class="post-bottom">

      <ul>
         <li>
          <span class="text-info">{{ post.likes }} <i class="bi bi-hand-thumbs-up"></i></span>   
         </li>
         <li>
          <span class="text-info">{{ post.comments.length }} <i class="bi bi-chat"></i></span>
         </li>
      </ul>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { Post } from "../types/types";

defineProps<{ post: Post }>();
</script>

<style scoped>
body {
  margin-top: 20px;
  background: #eee;
}

.avatar {
  position: relative;
  display: inline-block;
  width: 40px;
  white-space: nowrap;
  border-radius: 1000px;
  vertical-align: bottom;
}

.avatar i {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  border: 2px solid #fff;
  border-radius: 100%;
}

.avatar img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border: 0 none;
  border-radius: 1000px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.avatar-online i {
  background-color: #4caf50;
}

.avatar-off i {
  background-color: #616161;
}

.avatar-busy i {
  background-color: #ff9800;
}

.avatar-away i {
  background-color: #f44336;
}

.avatar-100 {
  width: 100px;
}

.avatar-100 i {
  height: 20px;
  width: 20px;
}

.avatar-lg {
  width: 50px;
}

.avatar-lg i {
  height: 12px;
  width: 12px;
}

.avatar-sm {
  width: 30px;
}

.avatar-sm i {
  height: 8px;
  width: 8px;
}

.avatar-xs {
  width: 20px;
}

.avatar-xs i {
  height: 7px;
  width: 7px;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid transparent;
}
.post-box{
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
}
.post-header{
  display: flex;
    gap: 10px;
    border-bottom: 1px solid #ddd;
    padding: 20px 10px 10px 20px;
    margin-bottom: 10px;
    align-items: center;
  
}
.post-header-col{}
.media-image{}
.media-image img{
  width: 50px;
    height: 50px;
    border-radius: 100%;
}
.post-header-col{}
.post-header-col h4{
  font-size: 16px;
  color: #222;
}
.post-content{
  padding: 10px 20px 15px;
}
.post-content p{
  font-size: 14px;
  text-align: start;
}
.post-bottom{
  border-top: 1px solid #ddd;
    padding: 10px 20px 10px;
}
.post-bottom ul{
  display: flex;
  gap: 15px;
  text-align: start;
  padding: 0px;
  margin: 0px;

}
.post-bottom ul li{
  list-style: none;
  color: #666;
}
.post-bottom ul li .text-info{
  color: #666 !important;
}

</style>
