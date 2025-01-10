import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData, Language, ThemeType, LanguageType } from '../types/portfolio';

const portfolioData: Language = {
  en: {
    profile: {
      name: "Carrie Kam",
      status: "4th year student at",
      place: "Polytechnique Montreal University",
      program: "in Software Engineering",
      description: "I have a strong interest in innovative technology and real-world applications. Constantly building side projects and diving into new tech to expand my skills and stay on the cutting edge. Eager to bring my dedication and creativity to a forward-thinking team in the tech industry.",
    },
    about: {
      achievements: [
        {
          title: "Hackathon",
          description: "Attended 10+ Hackathons (Hack the North, PolyHX, sheHacks, etc.), mostly online and always ready to code like a storm!",
        },
        {
          title: "McHacks9 Entertainer Prize",
          description: "Awarded the Entertainer prize at McHacks9 for the project: Scanspect - because who says potatoes can't be fun?",
        },
        {
          title: "Data Visualization",
          description: "As a class option, chose a data visualization class, because numbers deserve to be dressed up in style",
        },
        {
          title: "FreeCodeCamp Certified",
          description: "Completed the FreeCodeCamp certification for Responsive Web Design for +300 hours",
        },
        {
          title: "Angular",
          description: "Mastered Front-End skills (Angular) through sheer determination and boundless curiosity.",
        }
      ]
    },
    work: {
      timeline: [
        {
          title: "ACP Unit Team ",
          company: "Canada Border Service Agency",
          location: "Montreal, QC (Remote)",
          date: "May – August 2024",
          description: [
            "Developed comprehensive interactive dashboards for application components and business services using QualiWare, improving data visualization for senior management",
            "Created and maintained detailed documentation of over 400 functions and 100 global variables, improving code maintainability and team efficiency",
            "Debugged and refactored legacy code to eliminate duplicate data creation issues in the evaluation system",
            "Helping/coaching new students in the team"
          ],
          tags: ["QualiWare", "SQL", "TeamWork", "Jira", "Documentation", "Coaching", "Debugging"]
        },
        {
          title: "ACP Unit Team",
          company: "Canada Border Service Agency",
          location: "Montreal, QC (Remote)",
          date: "May – August 2023",
          description: [
            "Led bilingual website translation initiative for Agency Collaboration Platform using QualiWare, developing custom solutions and comprehensive documentation",
            "Orchestrated cross-platform content migration project, collaborating with director-level stakeholders and multiple divisions while implementing frontend optimizations",
            "Managed and updated enterprise-wide digital product catalog for critical IT asset tracking"
          ],
          tags: ["QualiWare", "SQL", "TeamWork", "Jira", "Documentation", "HTML", "CSS", "JavaScript"]
        },
        {
          title: "MLH Fellowship in Production Engineering",
          company: "Major League Hacking",
          location: "Montreal, QC (Remote)",
          date: "Jun – Aug 2022",
          description: [
            "Completed 12 weeks of curriculum-based learning covering core Production Engineering topics",
            "Created an open-source personal portfolio website template using Python, Flask, Jinja, MySQL, Nginx, and unit testing",
            "Automated testing and deployments workflows using CI/CD (GitHub Action and Bash)",
            "Set up system and container monitoring using Prometheus and Grafana"
          ],
          tags: ["Python", "Flask", "Jinja", "MySQL", "Nginx", "CI/CD", "Prometheus", "Grafana"]
        }
      ]
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
      place: "l'université Polytechnique de Montréal",
      program: "en génie logiciel",
      description: "J'ai un fort intérêt pour la technologie innovante et les applications réelles. Je construis constamment des projets parallèles et plonge dans de nouvelles technologies pour élargir mes compétences et rester à la pointe. Désireux d'apporter mon dévouement et ma créativité à une équipe avant-gardiste dans l'industrie technologique.",
    },
    about: {
      achievements: [
        {
          title: "Hackathon",
          description: "Participé à plus de 10 hackathons (Hack the North, PolyHX, sheHacks, etc.), principalement en ligne et toujours prêt à coder comme une tempête!",
        },
        {
          title: "Prix de l'animateur McHacks9",
          description: "Récompensé par le prix de l'animateur à McHacks9 pour le projet : Scanspect - parce que qui a dit que les pommes de terre ne pouvaient pas être amusantes?",
        },
        {
          title: "Visualisation des données",
          description: "En option de cours, choisi un cours de visualisation des données, car les chiffres méritent d'être habillés avec style",
        },
        {
          title: "Certifié FreeCodeCamp",
          description: "Complété la certification FreeCodeCamp pour la conception Web réactive pour plus de 300 heures",
        },
        {
          title: "Angular",
          description: "Maîtrisé les compétences Front-End (Angular) grâce à une détermination sans faille et une curiosité sans bornes.",
        }
      ]
    },
    work: {
      timeline: [
        {
          title: "Équipe ACP",
          company: "Agence des services frontaliers du Canada",
          location: "Montréal, QC (À distance)",
          date: "Mai – Août 2024",
          description: [
            "Développé des tableaux de bord interactifs complets pour les composants d'application et les services d'entreprise utilisant QualiWare, améliorant la visualisation des données pour la haute direction",
            "Créé et maintenu une documentation détaillée de plus de 400 fonctions et 100 variables globales, améliorant la maintenabilité du code et l'efficacité de l'équipe",
            "Débogué et remanié le code existant pour éliminer les problèmes de création de données en double dans le système d'évaluation",
            "Aider/coacher les nouveaux étudiants dans l'équipe"
          ],
          tags: ["QualiWare", "SQL", "TravailÉquipe", "Jira", "Documentation", "Coaching", "Débogage"]
        },
        {
          title: "Équipe ACP",
          company: "Agence des services frontaliers du Canada",
          location: "Montréal, QC (À distance)",
          date: "Mai – Août 2023",
          description: [
            "Dirigé l'initiative de traduction bilingue du site web pour la Plateforme de Collaboration de l'Agence utilisant QualiWare, développant des solutions personnalisées et une documentation complète",
            "Orchestré un projet de migration de contenu multi-plateformes, collaborant avec les parties prenantes au niveau de la direction et plusieurs divisions tout en implémentant des optimisations frontend",
            "Géré et mis à jour le catalogue de produits numériques à l'échelle de l'entreprise pour le suivi des actifs informatiques critiques"
          ],
          tags: ["QualiWare", "SQL", "TravailÉquipe", "Jira", "Documentation", "HTML", "CSS", "JavaScript"]
        },
        {
          title: "MLH Fellowship en ingénierie de production",
          company: "Major League Hacking",
          location: "Montréal, QC (À distance)",
          date: "Juin – Août 2022",
          description: [
            "Complété 12 semaines d'apprentissage basé sur un programme couvrant les sujets fondamentaux de l'ingénierie de production",
            "Créé un modèle de site web portfolio open-source utilisant Python, Flask, Jinja, MySQL, Nginx, et tests unitaires",
            "Automatisé les flux de travail de test et de déploiement utilisant CI/CD (GitHub Action et Bash)",
            "Mis en place la surveillance des systèmes et des conteneurs utilisant Prometheus et Grafana"
          ],
          tags: ["Python", "Flask", "Jinja", "MySQL", "Nginx", "CI/CD", "Prometheus", "Grafana"]
        }
      ]
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

function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>('en');
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<Language>(portfolioData);
  const [theme, setTheme] = useState<ThemeType>(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Simulate initial loading
  // useEffect runs a function once after the component renders
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Apply the theme to the document's root element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]); // This effect runs whenever the 'theme' state changes

  // Catches in real-time if the theme changed in the browser
  useEffect(() => {
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (mediaEvent: MediaQueryListEvent) => {
      setTheme(mediaEvent.matches ? 'dark' : 'light');
    };

    preferDark.addEventListener('change', handleChange);

    return () => preferDark.removeEventListener('change', handleChange);
  }, []);

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
}

function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}

export { PortfolioProvider, usePortfolio };