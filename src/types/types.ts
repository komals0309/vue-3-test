// Define a type for a user
export interface User {
    phoneNumber: string;
    name: string;
  }
  
  // Define a type for a post
  export interface Post {
    id: number;
    content: string;
    author: string;
    likes: number;
    comments: string[];
  }
  