import { Routes, Route } from "react-router";
import Home from "./home/home.component";
import { ProjectPage } from "./project/project-page.component";
import { AboutPage } from "./about/about-page.component";
import { ContactPage } from "./contact/contact-page.component";

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/contact' element={<ContactPage />} />
        </Routes>
    );
}

export default AppRoutes;
