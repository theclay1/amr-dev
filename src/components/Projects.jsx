import Project from "./Project";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
function Projects() {
  return (
    <>
      <div className="overflow-x-scroll 2xl:overflow-visible mx-auto max-w-[216px] md:max-w-[674px] 2xl:w-3/5 flex 2xl:flex-row 2xl:flex-wrap gap-6 2xl:gap-y-12 justify-center 2xl:max-w-[1120px] 2xl:pr-10">
        <Project />
        <Project />
        <Project back="2xl:mr-[-100px]" />
        <Project back="2xl:ml-[-100px]" />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project back="2xl:mr-[-100px]" />
        <FaAngleRight className=" hidden 2xl:block text-white h-10 w-10 absolute top-1/2 right-10 cursor-pointer" />
        <FaAngleLeft className=" hidden text-white h-10 w-10 absolute top-1/2 right-20 cursor-pointer" />
      </div>
      <div className=" 2xl:hidden flex gap-2 justify-center mt-[-70px] md:mt-[-60px]">
        <div className="bg-lime-600 px-2 py-2 rounded-full"></div>
        <div className="bg-lime-400 px-2 py-2 rounded-full"></div>
        <div className="bg-lime-600 px-2 py-2 rounded-full"></div>
        <div className="bg-lime-600 px-2 py-2 rounded-full"></div>
      </div>
    </>
  );
}

export default Projects;
