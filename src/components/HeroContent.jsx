import { CircleArrowOutDownRight, Github, Linkedin } from "lucide-react";

function HeroContent() {
  return (
    <div className="flex flex-col w-1/2 items-start p-20 space-y-6">
      <h1 className="font-bebas text-white text-8xl leading-none">
        HI, I AM
        <br />
        FELIPE SANTOS
      </h1>
      <h2 className="font-manrope text-white text-2xl">
        A front-end developer passionate about
        <br />
        building accessible and user friendly websites.
      </h2>
      <div className="flex items-center gap-5 mt-10">
        <button className="flex items-center gap-2 px-6 py-3 bg-[#D3E97A] text-black rounded-full hover:shadow-md transition-shadow duration-300 w-max font-manrope font-bold text-lg">
          CONTACT ME
          <CircleArrowOutDownRight size={20} />
        </button>
        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/felipe-dos-santos-silva-a79864315",
              "_blank"
            )
          }
          className="flex items-center justify-center bg-[#222222] rounded-full hover:shadow-md transition-shadow duration-300 w-14 h-14"
        >
          <Linkedin color="#D3E97A" />
        </button>
        <button
          onClick={() =>
            window.open("https://github.com/Felps-Santos", "_blank")
          }
          className="flex items-center justify-center bg-[#222222] rounded-full hover:shadow-md transition-shadow duration-300 w-14 h-14"
        >
          <Github color="#D3E97A" />
        </button>
      </div>
    </div>
  );
}

export default HeroContent;
