import React from 'react';
import RP from '../assets/rp.png';
import UOW from '../assets/uow.png';
import SIM from '../assets/sim.png';

const Education = () => {
    return (
        <div className="mx-auto p-8">

            <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-8 underline">Education</h2>

            <div className="mb-8">
                <div className="mb-4">

                    <h3 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 italic">Tertiary</h3>

                    <div className="flex-column items-center justify-center">
                        <div className="flex items-center justify-center mb-2">
                            <img src={RP} alt="RP" className="w-80 sm:w-80 md:w-80 lg:w-96" />
                        </div>

                        <div className="mt-2 sm:mt-2 md:mt-4 lg:mt-6 flex-column items-center justify-center">
                            <p className="text-sm sm:text-sm md:text-base lg:text-lg font-bold">
                                Republic Polytechnic
                            </p>
                            <p className="text-sm sm:text-sm md:text-base lg:text-lg italic">
                                Diploma in Information Technology
                            </p>
                            <pre className="text-sm sm:text-sm md:text-base lg:text-lg">
                                {'Singapore\nApril 2016 - March 2019'}
                            </pre>
                        </div>

                        <div className="flex-column items-center justify-center mb-2">
                            <p className="mt-2 sm:mt-2 md:mt-4 lg:mt-6 text-sm sm:text-sm md:text-base lg:text-lg">Final Year Project:</p>
                            <p className="mt-1 sm:mt-1 md:mt-2 lg:mt-3 text-sm sm:text-sm md:text-base lg:text-lg lg:w-1/2 mx-auto xl:w-1/2">Set up of Raspberry PI and breadboard with temperature and humidity sensors, retrieving the readings in real-time and sending the data into a cloud database using Microsoft Azure, with the use of Python. Created a website using MVC and C# to display the readings in real-time from Microsoft Azure database.</p>
                        </div>

                    </div>

                </div>

                <div className="divider divider-neutral"></div>

                <div className="mb-4">
                    <h3 className="text-4xl font-bold mb-4 italic">University</h3>

                    <div className="flex flex-row items-center justify-center mb-2">
                        <img src={SIM} alt="SIM" className="w-40 sm:w-60 md:w-70 lg:w-80 mr-2" />
                        <img src={UOW} alt="UOW" className="w-40 sm:w-60 md:w-70 lg:w-80 mr-2" />
                    </div>

                    <div className="flex-column items-center justify-center mt-2 sm:mt-2 md:mt-4 lg:mt-6 ">
                        <p className="text-sm sm:text-sm md:text-base lg:text-lg font-bold">
                            Singapore Institute of Management, under University of Wollongong
                        </p>
                        <p className="text-sm sm:text-sm md:text-base lg:text-lg italic">
                            Bachelor of Computer Science (Big Data)
                        </p>
                        <pre className="text-sm sm:text-sm md:text-base lg:text-lg">
                            {'Singapore\nJanuary 2022 - December 2023'}
                        </pre>
                    </div>

                    <div className="flex-column items-center justify-center mb-2">
                        <p className="mt-2 sm:mt-2 md:mt-4 lg:mt-6 text-sm sm:text-sm md:text-base lg:text-lg">Final Year Project:</p>
                        <p className="mt-1 sm:mt-1 md:mt-2 lg:mt-3 text-sm sm:text-sm md:text-base lg:text-lg lg:w-1/2 mx-auto xl:w-1/2">Took up React Native to create a mobile app for securely storing files. Used Firebase as authentication, database and storage to facilitate account management, requests for disablement/deletion of account, submitting feedback, and upload, downloading and deletion of files.</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Education;
