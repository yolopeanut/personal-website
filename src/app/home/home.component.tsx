import { HeroSection } from "./components/hero-section.component";
import { MyPortfolioSection } from "./components/my-portfolio-section.component";
import { TechnologiesSection } from "./components/technologies-section.component";
import { WorkSchoolSection } from "./components/work-school/work-school-section.component";

function Home() {
    return (
        <div className='h-screen w-full bg-custom-dark'>
            <div className='flex flex-col gap-10 justify-center items-center'>
                <HeroSection />
                <WorkSchoolSection />
                <TechnologiesSection />
                <MyPortfolioSection />
            </div>
        </div>
    );
}

export default Home;
