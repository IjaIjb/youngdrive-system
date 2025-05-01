// src/types/blog.ts
export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: {
      name: string;
      role: string;
      imageUrl: string;
    };
    imageUrl: string;
    date: string;
    categories: string[];
    tags: string[];
  }