import "./App.css";
import "./styles/navbar.css";
import Navbar from "./components/Navbar/Navbar";
import IntroSection from "./components/Introduction/IntroSection";
function App() {
  return (
    <>
      <main>
        <Navbar />
        {/* Intro Div */}

        <IntroSection />
      </main>
    </>
  );
}

export default App;
