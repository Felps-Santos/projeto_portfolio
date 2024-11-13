import "./App.css";

function App() {
  return (
    <div className="flex w-full h-full bg-custom-dark">
      <nav className="w-full h-16 flex justify-between items-center px-6 text-gray-300">
        <h3 className="h-full flex items-center font-bebas text-2xl">
          Felipe Santos
        </h3>
        <div className="flex space-x-5">
          <button className="text-base font-sans hover:text-white">Work</button>
          <button className="text-base font-sans hover:text-white">
            About
          </button>
          <button className="text-base font-sans hover:text-white">
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
