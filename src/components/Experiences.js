import React from 'react';

const Experiences = () => {
    return (
        <div className="mx-auto p-8">

            <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-8 underline">Experiences</h2>

            <div className="mb-8">

                <div className="mb-4">
                    <h3 className="text-base sm:text-base md:text-lg lg:text-xl font-bold">Dimension Data Asia Pacific Pte Ltd</h3>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg italic">Junior Application Developer (Internship)</p>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg">September 2018 - February 2019</p>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg">Singapore</p>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg lg:w-1/2 mx-auto xl:w-1/2">Maintenance of external client website, fixing of bugs and change requests, push and pull codes to and from repository.</p>
                </div>

                <div className="divider divider-neutral"></div>

                <div className="mb-4 mt-10">
                    <h3 className="text-base sm:text-base md:text-lg lg:text-xl font-bold">Tada Mobility (Singapore) Pte Ltd</h3>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg italic">Mapping Ops (Part Time)</p>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg">November 2021 - December 2021</p>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg">Singapore</p>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg lg:w-1/2 mx-auto xl:w-1/2">Collecting data using proprietary software and internal tools, cross referencing and ensuring accuracy of mapping and navigation systems, improving data collection process, and ad-hoc duties</p>
                </div>
            </div>

        </div>
    );
}

export default Experiences;
