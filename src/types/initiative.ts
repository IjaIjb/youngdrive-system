// src/types/initiative.ts
export interface Initiative {
    id: string;
    name: string;
    description: string;
    goal: string;
    activities: string[];
    progress: number; // percentage
    totalGoal: number;
    currentProgress: number;
    icon: string;
    imageUrl: string;
  }