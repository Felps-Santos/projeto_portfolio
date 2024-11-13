import { CircleArrowOutDownRight, Github } from "lucide-react";

function HeroContent() {
  return (
    <div className="flex flex-col w-1/2">
      <p className="font-manrope text-white text-2xl">
        <h1 className="flex font-bebas text-white text-8xl">
          HI, I AM
          <br />
          FELIPE SANTOS
        </h1>
        A front-end developer passionate about
        <br />
        building accessible and user friendly websites.
      </p>
      <button className="flex items-center gap-2 px-6 py-2 bg-[#D3E97A] text-black rounded-full hover:shadow-md transition-shadow duration-300 w-max my-6 font-manrope font-bold">
        CONTACT ME
        <CircleArrowOutDownRight size={16} />
      </button>
      <button className="flex items-center bg-[#222222] rounded-full hover:shadow-md transition-shadow duration-300 w-7">
        <Github color="#D3E97A" />
      </button>
    </div>
  );
}

export default HeroContent;
