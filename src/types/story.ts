// src/types/story.ts
export interface Story {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: {
      name: string;
      location: string;
      imageUrl: string;
    };
    imageUrl: string;
    date: string;
    supportCallToAction?: {
      text: string;
      link: string;
    };
  }
  