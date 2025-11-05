export interface Social {
  linkedin: string;
  github: string;
  email: string;
}

export interface Profile {
  name: string;
  status: string;
  place: string;
  program: string;
  description: string;
  cvLinkEn: string;
  cvLinkFr: string;
}

export interface About {
  achievements: Array<{
    title: string;
    description: string;
    iconKey: string;
  }>;
}

export interface Work {
  timeline: Array<{
    title: string;
    company: string;
    location: string;
    date: string;
    description: string[];
    tags: string[];
  }>;
}

export interface Projects {
  project: Array<{
    title: string;
    date: string;
    description: string[];
    url: string;
    githubURL?: string;
    imagePath: string;
    tags: string[];
    category: string;
  }>;
}

export interface Education {
  schools: Array<{
    name: string;
    program: string;
    year: string[];
  }>;
}

export interface PortfolioData {
  profile: Profile;
  about: About;
  social: Social;
  work: Work;
  projects: Projects;
  education: Education;
  ending: Ending;
}

export interface Ending {
  text: string;
}

export interface Language {
  en: PortfolioData;
  fr: PortfolioData;
}

export type ThemeType = "light" | "dark";
export type LanguageType = "en" | "fr";
