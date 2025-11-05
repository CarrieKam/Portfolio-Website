import React, { createContext, useContext, useState, useEffect } from 'react';
import { emptyPortfolioData } from '../types/emptyPortfolio';   // ① our fallback
import type { PortfolioData, LanguageType, ThemeType } from '../types/portfolio';


interface PortfolioContextType {
  data: PortfolioData;                                         // Holds portfolio content
  language: LanguageType;                                      // Stores the current language (e.g., "en" for English)
  theme: ThemeType;                                            // Stores the current theme (e.g., "dark")
  isLoading: boolean;                                          // Tracks if data is loading
  setLanguage: (lang: LanguageType) => void;                   // Function to change the language
  setTheme: (theme: ThemeType) => void;                        // Function to change the theme
  updateContent: (newContent: Partial<PortfolioData>) => void; // Updates portfolio content
}

const PortfolioContext = createContext<PortfolioContextType>({
  data: emptyPortfolioData,
  language: 'en',
  theme: 'light',
  isLoading: true,
  setLanguage: () => {},
  setTheme: () => {},
  updateContent: () => {}
});

function PortfolioProvider({ children }: { children: React.ReactNode }) {
   try {
    console.log('🔌 PortfolioProvider mounted');
  } catch (e) {
    console.error('💥 Provider crashed:', e);
    throw e;      // re-throw so you see the stack
  }
  const [language, setLanguage] = useState<LanguageType>('en');
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<LanguageType | null>(null);
  const [theme, setTheme] = useState<ThemeType>(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

    useEffect(() => {
      console.log('🚀 about to fetch from', import.meta.env.VITE_API_URL);
      fetch(`${import.meta.env.VITE_API_URL}/api/portfolio`)
        .then(r => {
          console.log('➡️ fetch resolved, status:', r.status); // ← NEW
          return r.json();
        })
        .then(blob => {
          console.log('📦 fetched portfolio', blob);
          setContent(blob);
          setIsLoading(false);
        })
        .catch(err => {
          console.error('❌ fetch failed:', err); // ← NEW
          setIsLoading(false);
        });
    }, []);

   useEffect(() => {
     const root = document.documentElement;
     root.classList.remove('light', 'dark');
     root.classList.add(theme);
     localStorage.setItem('theme', theme);
   }, [theme]);
 
   useEffect(() => {
     const media = window.matchMedia('(prefers-color-scheme: dark)');
     const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
     media.addEventListener('change', handler);
     return () => media.removeEventListener('change', handler);
   }, []);

const updateContent = (newContent: Partial<PortfolioData>) => {
  setContent(prev => {
      console.log('🛠  updateContent prev', prev, 'new', newContent);

    if (!prev) return { en: newContent as PortfolioData, fr: newContent as PortfolioData }; // fallback
    return {
      ...prev,
      [language]: {
        ...prev[language],
        ...newContent
      }
    };
  });
};

  // Creates the values that PortfolioContext will give to any child components
const value = {
  data: content?.[language],
  language,
  theme,
  isLoading,
  setLanguage,
  setTheme,
  updateContent
};

  return (
    // Wrap {children} (all child components) inside PortfolioContext.Provider to make value accessible to them
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}

export { PortfolioProvider, usePortfolio };