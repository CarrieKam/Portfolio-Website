// top of PortfolioContext.tsx
import type { PortfolioData, LanguageType, ThemeType } from '../types/portfolio';

export const emptyPortfolioData: PortfolioData = {
  profile: { name: '', status: '', place: '', program: '', description: '' },
  about:   { achievements: [] },
  work:    { timeline: [] },
  projects:{ project: [] },
  education:{ schools: [] },
  social:  { linkedin: '', github: '', email: '' },
  ending:  { text: '' }
};