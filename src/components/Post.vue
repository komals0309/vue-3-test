<template>
        <div class="row">
    <div class="col-md-12 col-xs-12">
      <div class="panel">
        <div class="panel-body">
          <hr class="margin-bottom-10">
          <ul class="list-group list-group-dividered list-group-full">
            <li class="list-group-item">
              <div class="media" >
                <div class="media-left">
                  <a class="avatar avatar-online" href="javascript:void(0)">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="...">
                    <i></i>
                  </a>
                </div>
                <div class="media-body">
                  <h2 class="media-heading">{{ post.author }}</h2>
                  <div>{{ post.content }}</div>
                </div>
              </div>
            </li>
          </ul>
            <span class="text-info">{{ post.likes }} <i class="bi bi-hand-thumbs-up"></i></span>
            <span class="text-info">{{ post.comments.length }} <i class="bi bi-chat"></i></span>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue';
  import { Post } from '../types/types';
  
defineProps<{
    post: Post;
  }>();
  </script>
  
  <style scoped>
  body{
    margin-top:20px;
    background:#eee;
}

.avatar {
    position: relative;
    display: inline-block;
    width: 40px;
    white-space: nowrap;
    border-radius: 1000px;
    vertical-align: bottom
    
}

.avatar i {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    border-radius: 100%
}

.avatar img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border: 0 none;
    border-radius: 1000px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.avatar-online i {
    background-color: #4caf50
}

.avatar-off i {
    background-color: #616161
}

.avatar-busy i {
    background-color: #ff9800
}

.avatar-away i {
    background-color: #f44336
}

.avatar-100 {
    width: 100px
}

.avatar-100 i {
    height: 20px;
    width: 20px
}

.avatar-lg {
    width: 50px
}

.avatar-lg i {
    height: 12px;
    width: 12px
}

.avatar-sm {
    width: 30px
}

.avatar-sm i {
    height: 8px;
    width: 8px
}

.avatar-xs {
    width: 20px
}

.avatar-xs i {
    height: 7px;
    width: 7px
}

.list-group-item {
    position: relative;
    display: block;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid transparent;
}
  </style>
  