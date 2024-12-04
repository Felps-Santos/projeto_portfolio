import { CircleArrowOutDownRight, Github, Linkedin, MoveUpRight } from "lucide-react";

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
        {/* Botão "CONTACT ME" com a bolinha à direita */}
        <button className="flex items-center gap-4 px-7 py-3 bg-[#D3E97A] text-black rounded-full hover:shadow-md transition-all duration-300 min-w-[200px] font-manrope font-bold text-lg group transform hover:scale-105 relative">
          {/* Texto fixo */}
          <span className="relative z-10">
            CONTACT ME
          </span>
          {/* Bolinha preta que expande para mostrar o ícone dentro */}
          <span className="flex items-center justify-center w-4 h-4 bg-black rounded-full transition-all duration-300 group-hover:w-10 group-hover:h-10 absolute right-5 group-hover:right-1">
            {/* Ícone de seta aparece dentro da bolinha quando expandida */}
            <MoveUpRight
              size={20}
              className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </span>
        </button>

        {/* Botões de redes sociais (LinkedIn e GitHub) */}
        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/felipe-dos-santos-silva-a79864315",
              "_blank"
            )
          }
          className="flex items-center justify-center bg-[#222222] rounded-full hover:shadow-md transition-shadow duration-300 w-14 h-14 transform hover:scale-110"
        >
          <Linkedin color="#D3E97A" />
        </button>
        <button
          onClick={() =>
            window.open("https://github.com/Felps-Santos", "_blank")
          }
          className="flex items-center justify-center bg-[#222222] rounded-full hover:shadow-md transition-shadow duration-300 w-14 h-14 transform hover:scale-110"
        >
          <Github color="#D3E97A" />
        </button>
      </div>
    </div>
  );
}

export default HeroContent;
