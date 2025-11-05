import girl from '../assets/images/girl.png'; 
import { useEffect, useState } from 'react'; 
import { Mail, Github, Linkedin } from 'lucide-react'; 
import { usePortfolio } from '../context/PortfolioContext'; 
import { Spotlight } from './ui/Spotlight';

const Profile = () => {
  const { data, language } = usePortfolio();
  const { profile, social } = data;

  const [greeting, setGreeting] = useState<string>(''); // State to store the greeting based on the time of day

  // Set the greeting message based on the current hour
  useEffect(() => {
    const hour = new Date().getHours();
    let greetingMessage = '';

    if (language === 'en') {
      if (hour < 12) greetingMessage = 'Good morning!';
      else if (hour < 18) greetingMessage = 'Good afternoon!';
      else greetingMessage = 'Good evening!';
    } else {
      if (hour < 12) greetingMessage = 'Bonjour!';
      else if (hour < 18) greetingMessage = 'Bon après-midi!';
      else greetingMessage = 'Bonsoir!';
    }

    setGreeting(greetingMessage);
  }, [language]);

  return (
    <section id="profile" className="mb-20">
      {/* Adding Spotlight components for decorative background effects */}
      <Spotlight className="-top-100 left-100 md:-left-32 md:-top-20 h-[220vh]" fill="#E3CAC6" />
      <Spotlight className="top-10 left-90 h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[20vh] w-[20vw]" fill="blue" />

      {/* Container for profile content */}
      <div className="flex flex-col md:flex-row items-center justify-between lg:h-screen md:h-full mx-8 mb-20">
        {/* Left side: Text and buttons */}
        <div className="space-y-7 text-center md:text-left ">
          <h1 className="text-3xl md:text-5xl lg:text-7xl mt-20 font-bold leading-30">
            {greeting}<br /> {language === 'en' ? "I'm" : "Je suis"} <span className="underline decoration-sky-500 whitespace-nowrap">{profile.name}</span>
          </h1>
          <h2 className="text-lg md:text-lg lg:text-2xl leading-10">
            {profile.status} {profile.place} {profile.program}
          </h2>
          <h2 className="text-lg md:text-2xl leading-10">{profile.description}<iframe
            src="https://giphy.com/embed/C5NXCBMq16cdKbm8su"
            className="giphy-embed inline-block align-baseline w-7 h-7 md:w-9 md:h-9 mx-1"
          /></h2>

          {/* Buttons for CV download links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <a
              href="https://drive.google.com/file/d/1RZU9vfzh4iSIin2Ndkjy9A3LuMV4dUnO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 bg-[#3DB7CA] text-lg md:text-2xl text-white rounded-lg shadow transition-all duration-200 hover:shadow-[inset_0_6px_10px_0_rgba(0,0,0,0.6)]">
                CV (en)
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1a1rnak8OpWsDsPezYz59D3UmCs0a4RCq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 bg-[#3DB7CA] text-lg md:text-2xl text-white rounded-lg shadow transition-all duration-200 hover:shadow-[inset_0_6px_10px_0_rgba(0,0,0,0.6)]">
                CV (fr)
              </button>
            </a>
          </div>
        </div>

        {/* Right side: Profile image and social links */}
        <div className="relative mt-10 md:mt-0">
          <div className="w-40 h-40 md:w-60 md:h-60 md:mb-5 ml-4 bg-gray-200 rounded-full">
            <img
              src={girl}
              alt="Asian girl image"
              className="w-full h-full object-contain rounded-full"
            />
          </div>

          {/* Social media icons */}
          <div className="flex space-x-6 mt-4 ml-4 justify-center">
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-[#3DB7CA] hover:text-[#A3466A]" />
            </a>
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 md:w-8 md:h-8 text-[#3DB7CA] hover:text-[#A3466A]" />
            </a>
            <a href={`mailto:${social.email}`}>
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-[#3DB7CA] hover:text-[#A3466A]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
