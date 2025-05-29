import { AiOutlineDownload } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

export function HeroSection() {
    return (
        <div className='flex flex-col gap-10 justify-center items-center mt-[15%]'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-custom-font-white-primary text-2xl font-semibold'>
                    BASED IN MALAYSIA
                </h1>
                <h1 className='text-custom-font-white-primary text-8xl'>
                    Hi. I'm{" "}
                    <span className='text-custom-blue-primary'>Brandon</span>.
                </h1>
                <h1 className='text-custom-font-gray-primary text-[32px]'>
                    I'm always{" "}
                    <span className='text-custom-blue-primary'>curious</span>{" "}
                    and{" "}
                    <span className='text-custom-blue-primary'>
                        obsessed with learning
                    </span>
                    .
                </h1>
            </div>
            <span className='text-custom-blue-primary text-[32px] font-semibold'>
                Junior Software Engineer
            </span>

            <div className='flex flex-row gap-4'>
                <button
                    className='text-white px-4 py-2 rounded-md border border-custom-border-gray-primary 
                              hover:cursor-pointer hover:bg-custom-background-gray-hover 
                              hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1
                              hover:border-blue-400/50 hover:text-blue-200
                              active:scale-95 active:translate-y-0 active:shadow-lg active:shadow-blue-500/40
                              transition-all duration-500 ease-out hover:duration-300 active:duration-150
                              group relative overflow-hidden'
                >
                    {/* Animated background gradient on hover */}
                    <div
                        className='absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 
                                    opacity-0 group-hover:opacity-100 group-active:opacity-30 transition-opacity duration-500 rounded-md'
                    ></div>

                    <div className='flex flex-row gap-2 items-center relative z-10'>
                        See My Work
                        <BiChevronRight
                            size={30}
                            className='group-hover:translate-x-1 group-hover:text-blue-300 group-active:translate-x-0 
                                      transition-all duration-300'
                        />
                    </div>

                    {/* Subtle shine effect */}
                    <div
                        className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                    -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out'
                    ></div>
                </button>

                <button
                    className='text-white px-4 py-2 rounded-md border border-custom-border-gray-primary 
                              hover:cursor-pointer hover:bg-custom-background-gray-hover 
                              hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1
                              hover:border-cyan-400/50 hover:text-cyan-200
                              active:scale-95 active:translate-y-0 active:shadow-lg active:shadow-cyan-500/40
                              transition-all duration-500 ease-out hover:duration-300 active:duration-150
                              group relative overflow-hidden'
                >
                    {/* Animated background gradient on hover */}
                    <div
                        className='absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-purple-600/10 
                                    opacity-0 group-hover:opacity-100 group-active:opacity-30 transition-opacity duration-500 rounded-md'
                    ></div>

                    <div className='flex flex-row gap-2 items-center relative z-10'>
                        <AiOutlineDownload
                            size={30}
                            className='text-custom-blue-primary group-hover:text-cyan-300 group-hover:scale-110 
                                      group-active:scale-100 transition-all duration-300'
                        />
                        Download CV
                    </div>

                    {/* Subtle shine effect */}
                    <div
                        className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                    -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out'
                    ></div>
                </button>
            </div>
        </div>
    );
}
