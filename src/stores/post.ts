import { defineStore } from 'pinia';
import { Post } from '../types/types';

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [] as Post[],
  }),
  actions: {
    createPost(content: string, author: string) {
      const newPost: Post = {
        id: Date.now(), // Use timestamp as a unique ID
        content,
        author,
        likes: 0,
        comments: [],
      };
      this.posts.unshift(newPost); // Add the new post to the beginning of the list
    },
  },
});
