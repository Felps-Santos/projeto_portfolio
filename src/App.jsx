import "./App.css";
import HeroContent from "./components/HeroContent";
import MeContent from "./components/MeContent";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="w-screen min-h-screen bg-custom-dark flex flex-col">
      <Nav />
      <section className="flex justify-center items-center h-4/5 w-screen">
        <HeroContent />
        <MeContent />
      </section>
      <section className="flex justify-center items-center h-4/5 w-screen">
        <HeroContent />
        <MeContent />
      </section>
    </div>
  );
}

export default App;
