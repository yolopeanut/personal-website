import { ProjectCard } from "./card/project-card.component";

export function MyPortfolioSection() {
    return (
        <div className='flex flex-col gap-4 w-full'>
            <h1 className='text-custom-font-white-primary text-2xl font-bold'>
                My Portfolio
            </h1>
            <span className='text-custom-font-gray-secondary text-sm'>
                Here are some of the project(s) I've worked on. Psst, more to
                come soon!
            </span>

            {/* SplitBill */}
            <ProjectCard
                imageArray={[
                    "src/assets/Friends.png",
                    "src/assets/Groups.png",
                    "src/assets/Transaction.png",
                ]}
                title='SplitBill'
                technologyArray={[
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "TypeScript",
                    "Cloudflare",
                    "GitHub",
                    "Tanstack Query",
                    "React Routers",
                    "Supabase",
                    "SQL",
                ]}
                description='A web application that allows users to split bills with friends.'
            />
        </div>
    );
}
