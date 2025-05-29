import { SchoolCard } from "./card/school-card.component";

export function SchoolTab() {
    return (
        <div className='flex flex-col gap-4'>
            {/* Taylor's University Malaysia */}
            <SchoolCard
                companyIcon={
                    "https://play-lh.googleusercontent.com/m0az_9QKsjakYmLdsmt9ftzgPIFD8KmYCEZ5XvRcNZPLfhpK04mmknbf1Z43GQaa5Q"
                }
            >
                <div className='flex flex-row gap-4 justify-between'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-custom-font-gray-secondary'>
                            Aug 2020 - Aug 2023
                        </h1>
                        {/* Company name */}
                        <h1>Taylor's University Malaysia</h1>
                        {/* Title */}
                        <h1 className='text-custom-font-white-primary'>
                            Bachelor of Computer Science
                            <br />
                            <span className='text-custom-font-gray-secondary'>
                                Specialization in Data Science and Artificial
                                Intelligence
                            </span>
                            <br />
                        </h1>
                    </div>
                    <span className='text-custom-font-white-primary'>
                        GPA: 3.88
                    </span>
                </div>
            </SchoolCard>

            {/* Sunway College */}
            <SchoolCard
                companyIcon={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYbbJio32t671uLPAYpzniNQngshcI1wvgQ&s"
                }
            >
                <div className='flex flex-row gap-4 justify-between'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-custom-font-gray-secondary'>
                            2019 - 2020
                        </h1>
                        {/* Company name */}
                        <h1>Sunway College</h1>
                        {/* Title */}
                        <h1 className='text-custom-font-white-primary'>
                            Canadian International Metriculation Programme
                        </h1>
                    </div>
                    <span className='text-custom-font-white-primary'>
                        Weighted GPA: 93.3%
                    </span>
                </div>
            </SchoolCard>
        </div>
    );
}
