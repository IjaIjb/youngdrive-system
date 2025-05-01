// src/data/initiatives.ts
import { Initiative } from '../types/initiative';
// import { FaLaptopCode, FaBookOpen, FaSeedling, FaVenusMars } from 'react-icons/fa';

export const initiatives: Initiative[] = [
  {
    id: 'ai-for-africa',
    name: 'Tech Africa',
    description: 'Bridging the digital divide with tech, AI and data advocacy.',
    goal: 'Train 100,000 youth in AI/Data Science by 2030',
    activities: [
      'Free online bootcamps (Python, PowerBI)',
      'Data privacy advocacy workshops',
      'Tech hackathons for local solutions',
      'Digital mentorship programs'
    ],
    progress: 15,
    totalGoal: 100000,
    currentProgress: 15000,
    icon: 'FaLaptopCode',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 'education-for-all',
    name: 'Education for All',
    description: 'Breaking barriers to quality education through scholarships and tech labs.',
    goal: 'Eliminate education inequality in 10 African nations',
    activities: [
      'GRE/GMAT prep webinars',
      'Digital labs in rural schools',
      'Teacher training workshops',
      'Scholarship application support'
    ],
    progress: 30,
    totalGoal: 10,
    currentProgress: 3,
    icon: 'FaBookOpen',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 'climate-action',
    name: 'Climate Action Warriors',
    description: 'Youth-led climate action and advocacy projects across the continent.',
    goal: 'Plant 1 million trees by 2025',
    activities: [
      'Urban gardening workshops',
      'Clean energy advocacy',
      'Podcast: "Green Futures Africa"',
      'Community-based recycling programs'
    ],
    progress: 45,
    totalGoal: 1000000,
    currentProgress: 450000,
    icon: 'FaSeedling',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 'gender-advocacy',
    name: 'Gender Advocacy',
    description: 'Financial inclusion and mentorship for young women across Africa.',
    goal: 'Support 50,000 women entrepreneurs by 2030',
    activities: [
      'Microloans for small businesses',
      'Financial literacy training',
      'Mentorship networks',
      'Advocacy for gender equality in tech'
    ],
    progress: 20,
    totalGoal: 50000,
    currentProgress: 10000,
    icon: 'FaVenusMars',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];