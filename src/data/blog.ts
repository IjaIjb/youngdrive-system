// src/data/blog.ts
import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'youth-climate-resilience',
    title: 'Why Africa\'s Youth Hold the Key to Climate Resilience',
    excerpt: 'As the continent most vulnerable to climate change impacts, Africa\'s young population is uniquely positioned to drive innovative solutions.',
    content: 'Africa contributes the least to global carbon emissions yet faces the most severe consequences of climate change...',
    author: {
      name: 'David Mwangi',
      role: 'Climate Program Director',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    imageUrl: 'https://images.unsplash.com/photo-1584974292709-5c2f0619a9e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: '2024-03-10',
    categories: ['Climate Action', 'Youth Leadership'],
    tags: ['climate change', 'innovation', 'sustainability']
  },
  {
    id: 'lagos-coding-champions',
    title: 'Meet the 2024 Coding Champions from Lagos!',
    excerpt: 'Ten remarkable young developers from our Lagos bootcamp who are creating solutions to local challenges.',
    content: 'The Tech Africa initiative recently concluded its three-month intensive coding bootcamp in Lagos...',
    author: {
      name: 'Fatima Nkosi',
      role: 'Technology & AI Lead',
      imageUrl: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: '2024-02-28',
    categories: ['Tech Africa', 'Success Stories'],
    tags: ['coding', 'bootcamp', 'tech education', 'lagos']
  },
  {
    id: 'gre-on-budget',
    title: 'How to Ace the GRE on a Budget',
    excerpt: 'Practical strategies for African students to prepare for graduate school entrance exams without breaking the bank.',
    content: 'For many aspiring African graduate students, standardized tests like the GRE present both an opportunity and a financial challenge...',
    author: {
      name: 'Amina Diallo',
      role: 'Education Lead',
      imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: '2024-01-15',
    categories: ['Education for All', 'Resources'],
    tags: ['scholarship', 'graduate school', 'test prep', 'education']
  },
  {
    id: 'african-ai-ethics',
    title: 'Building Ethical AI Frameworks for African Challenges',
    excerpt: 'How young African developers are ensuring AI technologies address local needs while respecting cultural contexts.',
    content: 'As artificial intelligence reshapes global industries, Africa has a unique opportunity to develop AI systems that reflect local values...',
    author: {
      name: 'Kwame Osei',
      role: 'Founder & Executive Director',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: '2023-12-05',
    categories: ['Tech Africa', 'Ethics'],
    tags: ['artificial intelligence', 'ethics', 'technology', 'development']
  }
];