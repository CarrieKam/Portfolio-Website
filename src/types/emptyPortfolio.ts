import type { PortfolioData } from '../types/portfolio';

export const emptyPortfolioData: PortfolioData = {
  profile: { name: '', status: '', place: '', program: '', description: '', cvLinkEn: '', cvLinkFr: '' },
  about:   { achievements: [] },
  work:    { timeline: [] },
  projects:{ project: [] },
  education:{ schools: [] },
  social:  { linkedin: '', github: '', email: '' },
  ending:  { text: '' }
};