function Nav() {
  return (
    <nav className="w-screen h-20 flex justify-between items-center px-10 text-gray-300">
      <h3 className="h-full flex items-center font-bebas text-3xl">
        Felipe Santos
      </h3>
      <div className="flex space-x-5">
        <button className="text-xl font-sans hover:text-white hover:text-2xl">Work</button>
        <button className="text-xl font-sans hover:text-white hover:text-2xl">About</button>
        <button className="text-xl font-sans hover:text-white hover:text-2xl">Contact</button>
      </div>
    </nav>
  );
}

export default Nav;
