import { HeroSection } from "./components/hero-section.component";
import { MyPortfolioSection } from "./components/projects/my-portfolio-section.component";
import { TechnologiesSection } from "./components/current-tech/technologies-section.component";
import { WorkSchoolSection } from "./components/work-school/work-school-section.component";
import { BackgroundDecorations } from "./background-decoration/background-decorations.component";
import { ContactMe } from "./components/contact/contact-me.component";
import { Navigation } from "./navigation/navigation.component";

function Home() {
    return (
        <div className='min-h-screen w-full flex bg-custom-dark justify-center'>
            <BackgroundDecorations />
            <Navigation />
            <div className='flex flex-col gap-20 justify-center items-center w-[60%] h-full pt-20'>
                <section id='home'>
                    <HeroSection />
                </section>
                <section id='experience'>
                    <WorkSchoolSection />
                </section>
                <section id='technologies'>
                    <TechnologiesSection />
                </section>
                <section id='portfolio'>
                    <MyPortfolioSection />
                </section>
                <section
                    id='contact'
                    className='min-h-screen flex items-center justify-center w-full'
                >
                    <ContactMe />
                </section>
            </div>
        </div>
    );
}

export default Home;
