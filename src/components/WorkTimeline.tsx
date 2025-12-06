import { usePortfolio } from '../context/PortfolioContext';
import workIcon from '../assets/logos/work.svg';
import { Timeline } from './ui/timeline';
import { Suspense } from 'react';
import { Activity } from 'lucide-react';

const WorkTimeline = () => {
  const { data, language } = usePortfolio();

  return (
    <section id="work" className="max-w-7xl mx-auto px-8 mb-20">
      {/* Section Header */}
      <div className="flex items-center space-x-4 mb-8">
        {/* Display the work icon */}
        <img src={workIcon} alt="Work icon" className="w-12 h-12" />
        {/* Section title based on the selected language */}
        <h2 className="text-4xl font-bold">
          {language === 'fr' ? 'Expérience professionnelle' : 'Work experience'}
        </h2>
      </div>
      
      {/* Timeline Section */}
      <div className="w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Activity>
            <Timeline 
              // Map over work timeline data to format it for the Timeline component
              data={data.work.timeline.map(entry => ({
                // Define the title, including the date and location
                title: [{ date: entry.date, location: entry.location }],
                // Content block for each timeline entry
                content: (
                  <div className="p-4 bg-gray-100 dark:bg-[#1a2c34] rounded-lg shadow-md border">
                    {/* Display the company name */}
                    <p className="text-lg font-medium">{entry.company}</p>
                    
                    {/* Description list */}
                    <ul className="list-disc ml-4 space-y-2">
                      {entry.description.map((desc, index) => (
                        // Each description is rendered as a list item
                        <li key={index} className="dark:text-gray-300 text-[#090B10] text-base">{desc}</li>
                      ))}
                    </ul>

                    {/* Tags Section */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.tags.map((tag, index) => (
                        // Render each tag as a pill-shaped element
                        <span 
                          key={index} 
                          className="px-3 py-1 text-sm bg-[#53CBDD] dark:bg-[#13404F] text-[090B10] dark:text-[#CAEDFA] rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              }))} 
            />
          </Activity>
        </Suspense>

      </div>
    </section>
  );
};

export default WorkTimeline;
