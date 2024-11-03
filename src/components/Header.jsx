import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import myImg from "../assets/me_1.0.png";

function Header() {
  return (
    <header className=" text-white absolute flex w-[95%] mx-auto px-5 2xl:pr-30 pt-2 md:pt-10  pb-5 items-center justify-between md:justify-end top-0">
      <div className="flex gap-2 items-center md:hidden">
        <img className=" h-10 w-10" src={myImg} alt="" />
        <h1 className="  capitalize font-['Bebas_Neue'] font-black tracking-wide ">
          amr muhammad
        </h1>
      </div>
      <div className="flex gap-4 md:gap-10">
        <a href="https://github.com/theclay1" target="_blank">
          <FaGithub className=" h-5 w-5 md:h-10 md:w-10 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/amr-muhammad-b3811523a/"
          target="_blank"
        >
          <FaLinkedin className=" h-5 w-5 md:h-10 md:w-10" />
        </a>
      </div>
    </header>
  );
}

export default Header;
