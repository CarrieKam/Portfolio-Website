"use client";
import React from 'react';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { usePortfolio } from '../context/PortfolioContext';

const Footer = () => {
    const { data, language } = usePortfolio();

    return (
        <div className="relative w-full h-[40rem]">
            <BackgroundBeamsWithCollision className="absolute inset-0 h-full">
            <a href="https://github.com/CarrieKam/Project-learning/tree/main/My%20portfolio" 
               className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30"
               target="_blank" 
               rel="noopener noreferrer">
                <button className="px-6 py-3 bg-[#3DB7CA] text-lg md:text-2xl text-white rounded-lg shadow transition-all duration-200 hover:shadow-[inset_0_6px_10px_0_rgba(0,0,0,0.6)]">
                {language === 'en' ? 'Learning Log' : 'Journal d\'apprentissage'}
                </button>
            </a>
            <div className="absolute bottom-4 w-full text-center dark:text-neutral-200 z-10">
                Copyright @Carrie Kam
            </div>
            </BackgroundBeamsWithCollision>
            <TypewriterEffectSmooth 
            words={[{ text: data.ending.text }]}
            className="absolute inset-0 z-10 break-words flex items-center justify-center text-2xl" 
            />
        </div>
    );
}

export default Footer;
