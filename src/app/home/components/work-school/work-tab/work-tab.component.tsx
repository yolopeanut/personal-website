import { WorkCard } from "./card/work-card.component";

export function WorkTab() {
    return (
        <div>
            <WorkCard
                companyIcon={
                    "https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Intel.png"
                }
            >
                {/* Duration */}
                <h1 className='text-custom-font-gray-secondary'>
                    May 2024 - Present
                </h1>
                {/* Company name */}
                <h1>Intel Malaysia Sdn Bhd</h1>
                {/* Title */}
                <h1 className='text-custom-font-gray-secondary'>
                    Software Engineer
                </h1>
                {/* Description */}
                <h1 className='text-custom-font-white-primary'>
                    <span className='font-bold text-custom-font-white-primary text-xl'>
                        Technologies used:{" "}
                    </span>
                    <ul className='list-disc pl-4'>
                        <li>
                            Front end:{" "}
                            <span className='text-custom-font-gray-secondary'>
                                Angular.js | TypeScript | Tailwind CSS
                            </span>
                        </li>
                        <li>
                            Backend:{" "}
                            <span className='text-custom-font-gray-secondary'>
                                C#
                            </span>
                        </li>
                        <li>
                            DevOps and Data Analysis:{" "}
                            <span className='text-custom-font-gray-secondary'>
                                Application Insights | Power BI | Azure DevOps
                            </span>
                        </li>
                    </ul>
                </h1>
                {/* Experience */}
                <h1 className='text-custom-font-white-primary'>
                    <span className='font-bold text-custom-font-white-primary text-xl'>
                        Experience:
                    </span>{" "}
                    <ul className='list-disc pl-4'>
                        <li>
                            Revamped two enterprise solution to increase
                            performance and user experience.
                        </li>
                        <div className='pl-4'>
                            <li>
                                Each solution had a performance gain of at least
                                20% (Benchmarked)
                            </li>
                            <li>
                                The solutions was responsible for managing more
                                then 500 million rows of data ~ 1 TB of data.
                            </li>
                        </div>
                    </ul>
                    <ul className='list-disc pl-4'>
                        <li>
                            Independently handled customer support and feature
                            development tickets.
                        </li>
                        <div className='pl-4'>
                            <li>
                                Gathering requirements, clarifying details and
                                understanding customer objectives, developing
                                feature and test cases, then deploying said
                                feature to pipeline.
                            </li>
                            <li>To date have closed more than 10 tickets.</li>
                        </div>
                    </ul>
                    <ul className='list-disc pl-4'>
                        <li>
                            Built a validator in Python, Pandas to ensure that
                            user data being sent to Database is clean and
                            adheres to data contract. The validator was built to
                            scale and can process 10 million rows of data in 15
                            seconds.
                        </li>
                    </ul>
                </h1>
            </WorkCard>
            {/* <WorkCard companyIcon={"/images/work/work-2.png"}>
                <h1>Work</h1>
            </WorkCard> */}
        </div>
    );
}
