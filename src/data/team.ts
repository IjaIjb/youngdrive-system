// src/data/team.ts
import { TeamMember } from '../types/team';

export const team: TeamMember[] = [
  {
    id: 'kwame-osei',
    name: 'Kwame Osei',
    role: 'Founder & Executive Director',
    bio: 'A data scientist who left his corporate job to train underserved youth in technology skills. Kwame believes in the transformative power of digital literacy for Africa\'s future.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:kwame@youngdrive.org'
    }
  },
  {
    id: 'amina-diallo',
    name: 'Amina Diallo',
    role: 'Education Lead',
    bio: 'Former teacher with a passion for digital classrooms. Amina has pioneered education initiatives in remote communities across West Africa.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:amina@youngdrive.org'
    }
  },
  {
    id: 'david-mwangi',
    name: 'David Mwangi',
    role: 'Climate Program Director',
    bio: 'Environmental scientist and activist who has led reforestation projects across East Africa. David is passionate about youth-led climate solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    socialLinks: {
      twitter: 'https://twitter.com',
      email: 'mailto:david@youngdrive.org'
    }
  },
  {
    id: 'fatima-nkosi',
    name: 'Fatima Nkosi',
    role: 'Technology & AI Lead',
    bio: 'Tech entrepreneur and AI researcher who believes in democratizing access to advanced technology education across Africa.',
    imageUrl: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:fatima@youngdrive.org'
    }
  }
];