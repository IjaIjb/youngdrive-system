// src/data/stories.ts
import { Story } from '../types/story';

export const stories: Story[] = [
  {
    id: 'aisha-tech-advocate',
    title: 'From Coding Learner to Tech Advocate',
    excerpt: 'How Aisha discovered her passion for coding and now teaches other young women in her community.',
    content: 'Growing up in a small village outside Nairobi, Aisha never imagined she would one day be leading digital literacy workshops...',
    author: {
      name: 'Aisha Kamau',
      location: 'Nairobi, Kenya',
      imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: '2024-02-15',
    supportCallToAction: {
      text: 'Support Her Coding School',
      link: '/get-involved'
    }
  },
  {
    id: 'samuel-scholarship',
    title: 'How Samuel Scored a Scholarship to Canada',
    excerpt: 'After facing numerous challenges, Samuels determination led him to an international scholarship opportunity.',
    content: 'Samuel grew up in a large family in Lagos where educational resources were scarce...',
    author: {
      name: 'Samuel Okafor',
      location: 'Lagos, Nigeria',
      imageUrl: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    imageUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: '2024-01-10'
  },
  {
    id: 'refugee-robotics',
    title: 'From Refugee to Robotics Mentor',
    excerpt: 'Displaced by conflict, Amina found purpose in learning robotics and now teaches children in her refugee camp.',
    content: 'When conflict broke out in her hometown, Amina and her family were forced to flee...',
    author: {
      name: 'Amina Ibrahim',
      location: 'Kakuma Refugee Camp, Kenya',
      imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: '2023-11-05',
    supportCallToAction: {
      text: 'Fund Her School',
      link: '/get-involved'
    }
  },
  {
    id: 'village-mine-activist',
    title: 'How I Stopped a Mine from Polluting My Village',
    excerpt: 'Thomas organized his community to advocate against harmful mining practices, leading to stronger environmental regulations.',
    content: 'When a multinational mining company began operations near Thomas\'s village, the community soon noticed changes in their water...',
    author: {
      name: 'Thomas Mensah',
      location: 'Accra, Ghana',
      imageUrl: 'https://images.unsplash.com/photo-1548123378-bde4aeec7c7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    imageUrl: 'https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: '2023-12-18',
    supportCallToAction: {
      text: 'Fund Legal Aid',
      link: '/get-involved'
    }
  }
];