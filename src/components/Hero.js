import React from 'react';
import selfieImage from '../assets/selfie.jpg';
import linkedinIcon from '../assets/linkedin.png';

const Hero = () => {
    const linkedinProfileUrl = 'https://www.linkedin.com/in/lamont-ng-19b126123/';

    return (
        <div className="hero min-h-screen bg-base-500">
            <div className="hero-content rounded-lg border border-gray-500 p-8 flex flex-col sm:flex-row items-center justify-center">
                <div className="max-w-lg mr-4 sm:mr-4 md:mr-6 lg:mr-8">
                    <h2 className="text-1xl sm:text-1xl md:text-2xl lg:text-3xl text-center">Hello there, I am</h2>
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-cyan-600 drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-yellow-500">Lamont Ng</h1>
                    <p className="sm:py-4 md:py-5 lg:py-6 text-center">
                        Inquisitive individual with a desire to learn more about the world, 
                        quick learner who assimilates information rapidly, with a strong passion 
                        in programming.
                    </p>
                    <p className="text-center mb-3 sm:mb-3 md:mb-4 lg:mb-5">
                        While I wait to hear about my final year project grades, I'm currently seeking for a chance to
                        pursue a career as a software engineer.
                    </p>
                    <p className="text-center">Contacts:</p>
                    <p className="text-center">Number: 93299769</p>
                    <p className="text-center">Email: lamontmk@gmail.com</p>
                    <h1 className="text-center mt-10 mb-2">Connect with me through LinkedIn!</h1>
                    <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <img
                            src={linkedinIcon}
                            alt="LamontLinkedIn"
                            className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                        />
                    </a>
                </div>
                <img src={selfieImage} alt="Lamont" className="w-72 sm:w-72 md:w-80 lg:w-96 rounded-lg shadow-2xl mb-4 sm:mb-0" />
            </div>
        </div>
    );
};

export default Hero;
