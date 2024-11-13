import "./App.css";
import HeroContent from "./components/HeroContent";
import MeContent from "./components/MeContent";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="w-screen h-screen bg-custom-dark flex flex-col">
      <Nav />
      <section className="flex p-20 w-full justify-center items-center h-4/5">
        <HeroContent />
        <MeContent />
      </section>
    </div>
  );
}

export default App;
