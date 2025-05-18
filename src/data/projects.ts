// src/data/projects.ts
import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'covid19-sensitization',
    name: 'COVID-19 Sensitization Campaign',
    description: 'A community education initiative to spread awareness about COVID-19 prevention measures and combat misinformation.',
    timeline: {
      start: '2020-03',
      end: '2021-12'
    },
    status: 'completed',
    location: 'Nigeria',
    imageUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    callToAction: {
      text: 'See Campaign Gallery',
      link: 'https://www.instagram.com/campaign_against_covid19_effec'
    }
  },
  {
    id: 'data-analysis-ai-training',
    name: 'Training on Data Analysis and AI',
    description: 'Comprehensive training program equipping youth with data analysis and artificial intelligence skills for the modern job market.',
    timeline: {
      start: '2023-09',
      end: '2025-12'
    },
    status: 'active',
    location: 'Nigeria',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    callToAction: {
      text: 'Join Our WhatsApp Group',
      link: 'https://chat.whatsapp.com/Bzna23iDgAAKFnqPIL9aL8'
    }
  },
  {
    id: 'event-management-training',
    name: 'Training on Program Planning and Event Management',
    description: 'Hands-on training program to develop skills in event planning, coordination, and management for professional development.',
    timeline: {
      start: '2023-07',
      end: '2025-12'
    },
    status: 'active',
    location: 'Nigeria',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    callToAction: {
      text: 'Join Our WhatsApp Group',
      link: 'https://chat.whatsapp.com/LvhzcMFMYVZ0iCTYgYhyNa'
    }
  },
  {
    id: 'women-skill-training',
    name: 'Skill and Artisan Training Program for Women',
    description: 'Vocational training in makeup, hair dressing, and other artisan skills to empower women with sustainable livelihoods.',
    timeline: {
      start: '2023-10',
      end: '2025-12'
    },
    status: 'active',
    location: 'Nigeria',
    imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    callToAction: {
      text: 'Register for Next Class',
      link: '/get-involved'
    }
  },
  {
    id: 'youth-leadership-summit',
    name: 'Youth Leadership and Inclusivity Summit',
    description: 'An annual gathering focused on developing leadership skills and promoting inclusive practices among young leaders across Africa.',
    timeline: {
      start: '2023-11',
      end: '2024-11'
    },
    status: 'completed',
    location: 'Nigeria',
    imageUrl: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    callToAction: {
      text: 'Register for Summit 2.0',
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
    name: 'Climate Sensitization Outreach',
    description: 'An ongoing initiative educating communities about climate change, its impacts, and sustainable practices.',
    timeline: {
      start: '2025-04',
      end: '2026-04'
    },
    status: 'planned',
    location: 'Ghana',
    imageUrl: 'https://images.unsplash.com/photo-1569534065318-35f7e7c3334d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    callToAction: {
      text: 'Register Interest',
      link: '/get-involved'
    }
  },
  {
    id: 'youth-leadership-summit-2',
    name: 'Youth Leadership and Inclusivity Summit 2.0',
    description: 'The second iteration of our successful leadership summit, focusing on empowering youth with leadership skills and promoting inclusive practices.',
    timeline: {
      start: '2025-01',
      end: '2025-01'
    },
    status: 'planned',
    location: 'Nigeria',
    imageUrl: 'https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    callToAction: {
      text: 'Pre-Register Now',
      link: '/get-involved'
    }
  }
];