import { usePortfolio } from '../context/PortfolioContext';
import educationIcon from '../assets/logos/education.svg';
import { HoverEffect } from './ui/card-hover-effect';

const Education = () => {
  const { data, language } = usePortfolio();

  return (
    <section id="education" className="max-w-7xl mx-auto px-8 mb-20">
      <div className="flex items-center space-x-4 mb-8">
        <img src={educationIcon} alt="Education icon" className="w-12 h-12" />
        <h2 className="text-4xl font-bold">
          {language === 'fr' ? 'Éducation' : 'Education'} 
        </h2>
      </div>

      <HoverEffect items={data.education.schools} />
    </section>
  );
}

export default Education;