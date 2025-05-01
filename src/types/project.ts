// src/types/project.ts
export interface Project {
    id: string;
    name: string;
    description: string;
    timeline: {
      start: string;
      end: string;
    };
    status: 'planned' | 'active' | 'completed';
    location: string;
    imageUrl: string;
    callToAction?: {
      text: string;
      link: string;
    };
  }