import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SocialIcon } from "./social-icon/social-icon.component";

export function ContactMe() {
    return (
        <div className='flex flex-col items-center gap-8 py-16 px-6'>
            {/* Main Contact Section */}
            <div className='flex flex-col items-center gap-6 text-center max-w-2xl'>
                <h2 className='text-custom-font-white-primary text-3xl font-bold'>
                    Let's Connect
                </h2>
                <p className='text-custom-font-gray-secondary text-lg'>
                    I'm always open to discussing new opportunities,
                    collaborations, or just having a great conversation about
                    technology.
                </p>

                {/* Social Icons */}
                <div className='flex flex-row gap-6 mt-4'>
                    <SocialIcon
                        href='mailto:brandontan.official@gmail.com'
                        icon={<AiOutlineMail size={32} />}
                        ariaLabel='Send me an email'
                        hoverColor='blue'
                    />

                    <SocialIcon
                        href='https://www.linkedin.com/in/brandontanqiloong/'
                        icon={<BsLinkedin size={32} />}
                        ariaLabel='Connect with me on LinkedIn'
                        hoverColor='cyan'
                        external
                    />

                    <SocialIcon
                        href='https://github.com/yolopeanut'
                        icon={<BsGithub size={32} />}
                        ariaLabel='Check out my GitHub profile'
                        hoverColor='purple'
                        external
                    />
                </div>
            </div>

            {/* Developer Attribution */}
            <div className='mt-12 pt-8 border-t border-custom-border-gray-primary w-full max-w-4xl'>
                <div className='flex flex-col items-center gap-4 text-center'>
                    <div className='flex items-center gap-3'>
                        <div className='h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
                        <span className='text-custom-font-gray-secondary text-sm font-medium'>
                            Crafted with passion
                        </span>
                        <div className='h-1 w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full'></div>
                    </div>

                    <div className='group cursor-default'>
                        <h3
                            className='text-custom-font-white-primary text-xl font-semibold 
                                      group-hover:text-transparent group-hover:bg-gradient-to-r 
                                      group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 
                                      group-hover:bg-clip-text transition-all duration-500'
                        >
                            Developed by Brandon
                        </h3>
                        <p
                            className='text-custom-font-gray-secondary text-sm mt-1 
                                     group-hover:text-blue-300 transition-colors duration-300'
                        >
                            Junior Software Engineer • Always Learning
                        </p>
                    </div>

                    <div className='flex items-center gap-2 mt-2'>
                        <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                        <span className='text-custom-font-gray-secondary text-xs'>
                            Available for opportunities
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom decorative element */}
            <div className='mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-custom-blue-primary to-transparent rounded-full opacity-50'></div>
        </div>
    );
}
