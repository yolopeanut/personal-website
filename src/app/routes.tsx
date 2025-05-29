import { Routes, Route } from "react-router";
import Home from "./home/home.component";
import { ProjectPage } from "./project/project-page.component";
function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<ProjectPage />} />
        </Routes>
    );
}

export default AppRoutes;
