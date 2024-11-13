import "./App.css";
import HeroContent from "./components/HeroContent";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="w-screen h-screen bg-custom-dark flex flex-col">
      <Nav />
      <section className="flex bg-slate-300 p-80 w-full justify-center items-center h-4/5">
        <HeroContent />
        <HeroContent />
      </section>
    </div>
  );
}

export default App;
