interface TechCardProps {
    icon: string;
    name: string;
    description: string;
}

export function TechCard({ icon, name, description }: TechCardProps) {
    return (
        <div
            className='bg-custom-background-gray-secondary rounded-lg py-4 px-4 w-72 h-20 flex flex-row items-center gap-4 
                        border border-transparent hover:border-blue-400/30
                        hover:bg-custom-background-gray-hover hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
                        hover:-translate-y-2 
                        transition-all duration-500 ease-out cursor-pointer
                        group relative overflow-hidden'
        >
            {/* Animated background gradient on hover */}
            <div
                className='absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg'
            ></div>

            <img
                src={icon}
                alt='icon'
                className='w-10 h-10 object-contain rounded-md relative z-10
                          group-hover:scale-110 group-hover:rotate-6 
                          transition-all duration-500 ease-out'
            />
            <div className='flex flex-col relative z-10'>
                <h1
                    className='text-custom-font-white-primary text-lg font-bold
                              group-hover:text-blue-300 transition-colors duration-300'
                >
                    {name}
                </h1>
                <span
                    className='text-custom-font-gray-secondary text-sm
                                group-hover:text-blue-200 transition-colors duration-300'
                >
                    {description}
                </span>
            </div>

            {/* Subtle shine effect */}
            <div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out'
            ></div>
        </div>
    );
}
