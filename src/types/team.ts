// src/types/team.ts
export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
    socialLinks?: {
      linkedin?: string;
      twitter?: string;
      email?: string;
    };
  }