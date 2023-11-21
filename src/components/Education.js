import React from 'react';
import RP from '../assets/rp.png';
import UOW from '../assets/uow.png';
import SIM from '../assets/sim.png';

const Education = () => {
    return (
        <div className="mx-auto p-8">

            <h2 className="text-5xl font-bold mb-8 underline">Education</h2>

            <div className="mb-8">
                <div className="mb-4">

                    <h3 className="text-4xl font-bold mb-4 italic">Tertiary</h3>
                    <div className="flex-column items-center justify-center">
                        <div className="flex items-center justify-center mb-2">
                            <img src={RP} alt="RP" className="sm:w-80 md:w-80 lg:w-96" />
                        </div>
                        <div className="sm:mt-2 md:mt-4 lg:mt-6 flex-column items-center justify-center">
                            <p className="sm:text-sm md:text-base lg:text-lg font-bold">
                                Republic Polytechnic
                            </p>
                            <p className="sm:text-sm md:text-base lg:text-lg italic">
                                Diploma in Information Technology
                            </p>
                            <pre className="sm:text-sm md:text-base lg:text-lg">
                                {'Singapore\nApril 2016 - March 2019'}
                            </pre>
                        </div>
                        <div className="flex-column items-center justify-center mb-2">
                            <p className="sm:mt-2 md:mt-4 lg:mt-6 sm:text-sm md:text-base lg:text-lg">Final Year Project:</p>
                            <p className="sm:mt-1 md:mt-2 lg:mt-3 sm:text-sm md:text-base lg:text-lg">Set up of Raspberry PI and breadboard with temperature and humidity sensors, retrieving the readings in real-time and sending the data into a cloud database using Microsoft Azure, with the use of Python. Created a website using MVC and C# to display the readings in real-time from Microsoft Azure database.</p>
                        </div>
                    </div>

                </div>
                <div className="divider divider-neutral"></div>
                <div className="education-frame mb-4">
                    <h3 className="text-4xl font-bold mb-4 italic">University</h3>
                    <div className="flex flex-row items-center justify-center mb-2">
                        <img src={SIM} alt="SIM" className="sm:w-60 md:w-70 lg:w-80 mr-2" />
                        <img src={UOW} alt="UOW" className="sm:w-60 md:w-70 lg:w-80 mr-2" />
                    </div>
                    <div className="flex-column items-center justify-center sm:mt-2 md:mt-4 lg:mt-6 ">
                        <p className="sm:text-sm md:text-base lg:text-lg font-bold">
                            Singapore Institute of Management, under University of Wollongong
                        </p>
                        <p className="sm:text-sm md:text-base lg:text-lg italic">
                            Bachelor of Computer Science (Big Data)
                        </p>
                        <pre className="sm:text-sm md:text-base lg:text-lg">
                            {'Singapore\nJanuary 2022 - December 2023'}
                        </pre>
                    </div>
                    <div className="flex-column items-center justify-center mb-2">
                        <p className="sm:mt-2 md:mt-4 lg:mt-6 sm:text-sm md:text-base lg:text-lg">Final Year Project:</p>
                        <p className="sm:mt-1 md:mt-2 lg:mt-3 sm:text-sm md:text-base lg:text-lg">Took up React Native to create a mobile app for securely storing files. Used Firebase as authentication, database and storage to facilitate account management, requests for disablement/deletion of account, submitting feedback, and upload, downloading and deletion of files.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;