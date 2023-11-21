import React from 'react';
import Azure from '../assets/azure.png';
import CSharp from '../assets/c-sharp.png';
import CSS from '../assets/css.png';
import Github from '../assets/github.png';
import HTML from '../assets/html.png';
import JS from '../assets/java-script.png';
import Java from '../assets/java.png';
import MySQL from '../assets/mysql.png';
import Python from '../assets/python.png';
import ReactImage from '../assets/react.png';
import XML from '../assets/xml.png';
import Office from '../assets/office.png';
import Firebase from '../assets/firebase.png';

const skillsData = [
    { label: 'C#', image: CSharp, value: 70 },
    { label: 'Java', image: Java, value: 80 },
    { label: 'Python', image: Python, value: 80 },
    { label: 'MySQL', image: MySQL, value: 80 },
    { label: 'JavaScript', image: JS, value: 70 },
    { label: 'React & React Native', image: ReactImage, value: 60 },
    { label: 'Cascading Styling Sheets', image: CSS, value: 70 },
    { label: 'Extensive Markup Language', image: XML, value: 50 },
    { label: 'HyperText Markup Language', image: HTML, value: 70 },
];

const Skills = () => {
    const maxProgressValue = 100;

    return (
        <div className="container mx-auto p-8">

            <h3 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-8 underline">Proficiency Level</h3>

            <div className="flex flex-col items-center justify-center">
                <div className="mx-auto flex flex-col items-left justify-center">
                    {skillsData.map((skill, index) => (
                        <div className="flex mt-10" key={index}>
                            <img src={skill.image} alt={skill.label} className="w-10 h-10 mr-2" />
                            <p className="font-bold mt-2 lg:mt-1 text-sm sm:text-sm md:text-md lg:text-lg">{skill.label}</p>
                            <div className="flex flex-col">
                                <progress
                                    className="progress progress-primary w-80 mt-4 ml-4"
                                    value={skill.value}
                                    max={maxProgressValue}
                                ></progress>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-8 mt-8 italic">Skills</h1>

            <div className="flex mt-10 align-center justify-center">
                <div className="col-span-1 flex mr-10 sm:mr-10 md:mr-10 lg:mr-20">
                    <img src={Github} alt="Github" className="w-10 h-10 mr-2" />
                    <p className="mt-2 lg:mt-1.5 font-bold text-sm sm:text-sm md:text-md lg:text-lg">GitHub</p>
                </div>
                <div className="col-span-1 flex mr-10 sm:mr-10 md:mr-10 lg:mr-20">
                    <img src={Firebase} alt="Firebase" className="w-10 h-10 mr-2" />
                    <p className="mt-2 lg:mt-1.5 font-bold text-sm sm:text-sm md:text-md lg:text-lg">Firebase</p>
                </div>
                <div className="col-span-1 flex mr-10 sm:mr-10 md:mr-10 lg:mr-20">
                    <img src={Azure} alt="Azure" className="w-10 h-10 mr-2" />
                    <p className="mt-1 md:mt-2 lg:mt-1.5 font-bold text-sm sm:text-sm md:text-md lg:text-lg">Microsoft Azure</p>
                </div>
                <div className="col-span-1 flex mb-10">
                    <img src={Office} alt="Office" className="w-10 h-10 mr-2" />
                    <p className="mt-1 md:mt-2 lg:mt-1.5 font-bold text-sm sm:text-sm md:text-md lg:text-lg">Microsoft Office</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
