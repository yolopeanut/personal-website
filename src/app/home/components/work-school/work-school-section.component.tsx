import { useState } from "react";
import { WorkTab } from "./work-tab/work-tab.component";
import { SchoolTab } from "./school-tab/school-tab.component";

export function WorkSchoolSection() {
    const [activeTab, setActiveTab] = useState<"work" | "education">("work");
    const activeTabClass = "bg-custom-background-dark-primary rounded-sm";
    return (
        <div className='mt-64 w-[60%] gap-4 flex flex-col'>
            {/* Tabs */}
            <div
                className={`flex flex-row gap-1 bg-custom-background-gray-primary p-2 rounded-sm`}
            >
                <button
                    className={`flex-1 text-center text-custom-font-white-primary py-2 transition-all duration-300 ${
                        activeTab === "work" ? activeTabClass : ""
                    }`}
                    onClick={() => setActiveTab("work")}
                >
                    <h1>Work</h1>
                </button>
                <button
                    className={`flex-1 text-center text-custom-font-white-primary py-2 transition-all duration-300 ${
                        activeTab === "education" ? activeTabClass : ""
                    }`}
                    onClick={() => setActiveTab("education")}
                >
                    <h1>Education</h1>
                </button>
            </div>

            {/* Content */}
            <div className='border border-custom-border-gray-primary rounded-md grid relative overflow-hidden'>
                {/* Work Tab Content Pane */}
                <div
                    className={`
                        row-start-1 col-start-1 p-4 transition-all ease-in-out
                        ${
                            activeTab === "work"
                                ? "opacity-100 translate-y-0 duration-400 delay-150"
                                : "opacity-0 translate-y-2 duration-300 delay-0 pointer-events-none"
                        }
                    `}
                >
                    <WorkTab />
                </div>

                {/* Education Tab Content Pane */}
                <div
                    className={`
                        row-start-1 col-start-1 p-4 transition-all ease-in-out
                        ${
                            activeTab === "education"
                                ? "opacity-100 translate-y-0 duration-400 delay-150"
                                : "opacity-0 translate-y-2 duration-300 delay-0 pointer-events-none"
                        }
                    `}
                >
                    <SchoolTab />
                </div>
            </div>
        </div>
    );
}
