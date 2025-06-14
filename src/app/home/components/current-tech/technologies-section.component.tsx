import { TechCard } from "./tech-card/tech-card.component";

export function TechnologiesSection() {
    return (
        <div className='flex flex-col gap-4 w-full'>
            <h1 className='text-custom-font-white-primary text-2xl font-bold'>
                Current Technologies
            </h1>
            <span className='text-custom-font-gray-secondary'>
                I'm proficient in a range of modern technologies that empower me
                to build highly functional solutions. These are some of my main
                technologies.
            </span>
            <div className='flex flex-row gap-4 flex-wrap justify-center'>
                {/* React */}
                <TechCard
                    icon={"https://cdn.worldvectorlogo.com/logos/react-1.svg"}
                    name='React'
                    description='Javascript Library'
                />

                {/* Angular */}
                <TechCard
                    icon={
                        "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
                    }
                    name='Angular'
                    description='Javascript Framework'
                />

                {/* Figma */}
                <TechCard
                    icon={
                        "https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png"
                    }
                    name='Figma'
                    description='Design Tool'
                />

                {/* tailwind */}
                <TechCard
                    icon={
                        "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
                    }
                    name='Tailwind'
                    description='CSS Framework'
                />

                {/* C# */}
                <TechCard
                    icon={
                        "https://learn.microsoft.com/dotnet/media/dotnet-logo.png"
                    }
                    name='ASP.NET API (.NET 8)'
                    description='Web Framework'
                />

                {/* Python */}
                <TechCard
                    icon={"https://cdn.worldvectorlogo.com/logos/python-5.svg"}
                    name='Python'
                    description='Programming Language'
                />

                {/* SQL */}
                <TechCard
                    icon={
                        "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg"
                    }
                    name='SQL'
                    description='Database Language'
                />

                {/* Git */}
                <TechCard
                    icon={"https://cdn.worldvectorlogo.com/logos/git-icon.svg"}
                    name='Git'
                    description='Version Control'
                />

                {/* Typescript */}
                <TechCard
                    icon={
                        "https://static-00.iconduck.com/assets.00/typescript-icon-icon-2048x2048-2rhh1z66.png"
                    }
                    name='Typescript'
                    description='Programming Language'
                />

                {/* Supabase */}
                <TechCard
                    icon={
                        "https://cdn-1.webcatalog.io/catalog/supabase/supabase-icon.png?v=1714776024796"
                    }
                    name='Supabase'
                    description='Database'
                />

                {/* Cloudflare */}
                <TechCard
                    icon={
                        "https://cdn.worldvectorlogo.com/logos/cloudflare-1.svg"
                    }
                    name='Cloudflare'
                    description='Cloud Service'
                />
            </div>
        </div>
    );
}
