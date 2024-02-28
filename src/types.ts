/****************************
 * Project Types
 */

export type Tech = {
  id: string;
  name: string;
};

export type Screenshot = {
  id: string;
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  priority: number;
  featured: boolean;
  name: string;
  slug: string;
  description: string;
  github: string | null;
  demo: string;
  mainImageUrl: string;
  techStack: Tech[];
  detailHTML: string;
  screenshots: Screenshot[];
};

export type ProjectSummary = {
  id: string;
  name: string;
  slug: string;
  featured: boolean;
  description: string;
  mainImageUrl: string;
};
