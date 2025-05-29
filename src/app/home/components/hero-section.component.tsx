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
                    className=' text-white px-4 py-2 rounded-md border border-custom-border-gray-primary hover:cursor-pointer 
				hover:bg-custom-background-gray-hover transition-all duration-300'
                >
                    <div className='flex flex-row gap-2 items-center'>
                        See My Work
                        <BiChevronRight size={30} />
                    </div>
                </button>

                <button
                    className=' text-white px-4 py-2 rounded-md border border-custom-border-gray-primary hover:cursor-pointer 
				hover:bg-custom-background-gray-hover transition-all duration-300'
                >
                    <div className='flex flex-row gap-2 items-center'>
                        <AiOutlineDownload
                            size={30}
                            className='text-custom-blue-primary'
                        />
                        Download CV
                    </div>
                </button>
            </div>
        </div>
    );
}
