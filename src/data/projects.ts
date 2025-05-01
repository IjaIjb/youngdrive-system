// src/data/projects.ts
import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'financial-inclusion',
    name: 'Financial Inclusion for Women',
    description: 'A program providing microloans and financial literacy programs for young women entrepreneurs in rural communities.',
    timeline: {
      start: '2024-01',
      end: '2025-12'
    },
    status: 'active',
    location: 'Kenya, Rwanda, Ghana',
    imageUrl: 'https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    callToAction: {
      text: 'Volunteer as a Mentor',
      link: '/get-involved'
    }
  },
  {
    id: 'africa-story',
    name: 'The Africa Story Initiative',
    description: 'Sharing podcasts and documentaries that highlight resilience stories and crowdfunding solutions across the continent.',
    timeline: {
      start: '2023-06',
      end: '2026-06'
    },
    status: 'active',
    location: 'Pan-African',
    imageUrl: 'https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    callToAction: {
      text: 'Submit Your Story',
      link: '/stories'
    }
  },
  {
    id: 'digital-labs',
    name: 'Digital Labs for Rural Schools',
    description: 'Building technology centers in underserved rural communities to provide access to digital education resources.',
    timeline: {
      start: '2024-03',
      end: '2026-12'
    },
    status: 'active',
    location: 'Tanzania, Malawi, Zambia',
    imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    callToAction: {
      text: 'Donate Equipment',
      link: '/get-involved'
    }
  },
  {
    id: 'youth-climate-summit',
    name: 'Youth Climate Summit 2025',
    description: 'An annual gathering of young climate activists from across Africa to share ideas and develop action plans.',
    timeline: {
      start: '2025-04',
      end: '2025-04'
    },
    status: 'planned',
    location: 'Accra, Ghana',
    imageUrl: 'https://images.unsplash.com/photo-1569534065318-35f7e7c3334d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    callToAction: {
      text: 'Register Interest',
      link: '/get-involved'
    }
  }
];