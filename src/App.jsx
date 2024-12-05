import "./App.css";
import HeroContent from "./components/HeroContent";
import IntroductionProjects from "./components/IntroductionProjects";
import MeContent from "./components/MeContent";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="w-full min-h-screen bg-custom-dark flex flex-col overflow-hidden">
      <Nav />
      <section className="flex flex-wrap justify-center items-center h-auto w-full py-5">
        <HeroContent />
        <MeContent />
      </section>
      <section className="text-white w-full">
        <IntroductionProjects />
      </section>
    </div>
  );
}

export default App;
