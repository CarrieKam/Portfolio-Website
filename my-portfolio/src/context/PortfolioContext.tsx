import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData, Language, ThemeType, LanguageType } from '../types/portfolio';

const portfolioData: Language = {
  en: {
    profile: {
      name: "Carrie Kam",
      status: "4th year student at",
      place: "Polytechnique Montreal University",
      program: "in Software Engineering",
      description: "with a strong interest in innovative technology and real-world applications. Constantly building side projects and diving into new tech to expand my skills and stay on the cutting edge. Eager to bring my dedication and creativity to a forward-thinking team in the tech industry.",
    },
    about: {
      skills: ["Self-taught: Front-End (Angular and React)"],
      operatingSystems: ["Window", "Linux (Fedora, Ubuntu, Lubuntu)"],
      learning: ["Take notes and organized them in my Wikipedia (Obsidian)"]
    },
    social: {
      linkedin: "https://www.linkedin.com/in/carrie-kam-1837b3193/",
      github: "https://github.com/CarrieKam",
      email: "carriekam@protonmail.com"
    }
  },
  fr: {
    profile: {
      name: "Carrie Kam",
      status: "Étudiant en 4ème année à",
      place: "l'Université Polytechnique de Montréal",
      program: "en génie logiciel",
      description: "Aime faire des projets personnels et découvrir de nouvelles technologies",
    },
    about: {
      skills: ["Autodidacte: Front-End (Angular et React)"],
      operatingSystems: ["Window", "Linux (Fedora, Ubuntu, Lubuntu)"],
      learning: ["Prendre des notes et les organiser dans mon Wikipedia (Obsidian)"]
    },
    social: {
      linkedin: "https://www.linkedin.com/in/carrie-kam-1837b3193/",
      github: "https://github.com/CarrieKam",
      email: "carriekam@protonmail.com"
    }
  }
};

interface PortfolioContextType {
  data: PortfolioData;                                         // Holds portfolio content
  language: LanguageType;                                      // Stores the current language (e.g., "en" for English)
  theme: ThemeType;                                            // Stores the current theme (e.g., "dark")
  isLoading: boolean;                                          // Tracks if data is loading
  setLanguage: (lang: LanguageType) => void;                   // Function to change the language
  setTheme: (theme: ThemeType) => void;                        // Function to change the theme
  updateContent: (newContent: Partial<PortfolioData>) => void; // Updates portfolio content
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

// PortfolioProvider is a special component that "provides" the PortfolioContext to its children components.
export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>('en'); // This sets up language with an initial value of 'en'
  const [theme, setTheme] = useState<ThemeType>('dark');
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<Language>(portfolioData);

  // Simulate initial loading
  // useEffect runs a function once after the component renders
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Theme handling
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

                      // newContent may only include some properties of PortfolioData, making it flexible for updates without requiring all of PortfolioData
  const updateContent = (newContent: Partial<PortfolioData>) => {
    setContent(prev => ({
      // copies all properties from prev (the previous content state) into a new object, ensuring other parts of content stay unchanged
      ...prev,
      // dynamically sets a property key based on the current language. For instance, if language is "en", it targets prev.en
      [language]: {
        // ensuring that any updated properties in newContent replace those in prev[language], while other existing properties are kept intact
        ...prev[language],
        ...newContent
      }
    }));
  };

  // Creates the values that PortfolioContext will give to any child components
  const value = {
    data: content[language],
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
};

// usePortfolio is a shortcut to access the PortfolioContext in other components
export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};