import "./App.css";
import "./styles/navbar.css";
import Navbar from "./components/Navbar/Navbar";
import IntroSection from "./components/Introduction/IntroSection";

import RoleSection from "./components/Role/RoleSection";
import ProjectsSection from "./components/Projects/ProjectsSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center max-w-350 mx-auto">
        {/* Intro Div */}

        <IntroSection />

        <RoleSection />

        <ProjectsSection />
      </main>
    </>
  );
}

export default App;
