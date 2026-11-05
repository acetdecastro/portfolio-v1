export interface SocialLink {
  label: string;
  href: string;
}

export interface Experience {
  company: string;
  position: string;
  years: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: string;
  overview: string;
  outcomes: readonly string[];
  technologies: readonly string[];
}
