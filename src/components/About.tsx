import { usePortfolio } from '../context/PortfolioContext'; 
import { Trophy, FileCode2, BarChart, CheckCircle, Code, Activity } from 'lucide-react'; 
import aboutIcon from '../assets/logos/info.svg'; 
import { Suspense } from 'react';

interface Achievement {
  title: {
    en: string; 
    fr: string; 
  };
  description: {
    en: string; 
    fr: string; 
  };
  iconKey: AchievementKey; 
}

// Type defining the allowed keys for achievements
type AchievementKey = 
  | "hackathon" 
  | "mcHacks9EntertainerPrize"
  | "dataVisualization" 
  | "freeCodeCampCertified"
  | "angular"; 

// A mapping of achievement keys to corresponding JSX elements (icons)
const iconMap: Record<AchievementKey, JSX.Element> = {
  "hackathon": <FileCode2 className="text-white w-8 h-8" />,
  "mcHacks9EntertainerPrize": <Trophy className="text-white w-8 h-8" />,
  "dataVisualization": <BarChart className="text-white w-8 h-8" />,
  "freeCodeCampCertified": <CheckCircle className="text-white w-8 h-8" />,
  "angular": <Code className="text-white w-8 h-8" />,
};



const About = () => {
  const { data, language,isLoading } = usePortfolio(); 
  console.log('🎯 consumer data', data, 'loading', isLoading);

  // Formatting achievements from raw data
  const achievements = (data.about.achievements || []).map((achievement: any) => ({
    title: {
      en: achievement.title, 
      fr: achievement.title, 
    },
    description: {
      en: achievement.description, 
      fr: achievement.description, 
    },
    iconKey: achievement.iconKey, 
  })) as Achievement[];

  return (
    <section id="about" className="mb-20">
      {/* Section header with icon and title */}
      <div className="flex items-center space-x-4 mb-8 mx-8">
        <img src={aboutIcon} alt="About icon" className="w-12 h-12" /> 
        <h2 className="text-4xl font-bold">
          {language === 'fr' ? 'À propos' : 'About'} 
        </h2>
      </div>

      {/* Achievements list */}
      <div className="space-y-4 relative">
        <Suspense fallback={<div>Loading...</div>}>
          <Activity>
            {achievements.map((achievement, index) => {
              // Determine title and description based on the selected language
              const title = language === 'fr' ? achievement.title.fr : achievement.title.en;
              const description = language === 'fr' ? achievement.description.fr : achievement.description.en;

              return (
                <div key={index} className="relative">
                  {/* Add a vertical line below the first achievement */}
                  {achievement.iconKey === 'hackathon' && (
                    <div className="absolute left-12 top-full w-px h-24 bg-[#203d49] dark:bg-[#3DB7CA] p-2 z-10" />
                  )}

                  {/* Achievement card */}
                  <div
                    className={`p-8 rounded-lg transition-colors duration-200 relative mx-8 ${
                      achievement.iconKey === 'mcHacks9EntertainerPrize'
                        ? 'ml-20 bg-[#3DB7CA] dark:bg-[#1a2c34]' // Specific styling for McHacks9 prize
                        : 'bg-[#3DB7CA] dark:bg-[#1a2c34]' // Default styling for other achievements
                    }`}
                  >
                    {/* Special styling for McHacks9 prize */}
                    {achievement.iconKey === 'mcHacks9EntertainerPrize' && (
                      <div className="absolute -left-8 top-1/2 w-8 bg-[#203d49] dark:bg-[#3DB7CA] p-2" />
                    )}

                    <div className="flex items-start space-x-4">
                      {/* Icon for the achievement */}
                      <div className="w-12 h-12 bg-[#253D5B] dark:bg-[#3DB7CA] rounded-lg flex items-center justify-center flex-shrink-0">
                        {iconMap[achievement.iconKey]} 
                      </div>

                      {/* Achievement details */}
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {title} 
                        </h3>
                        <p className="text-white dark:text-gray-300">
                          {description} 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Activity>
        </Suspense>
      </div>
    </section>
  );
};

export default About;
