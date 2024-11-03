import { FaReact } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";
// import { ImHtmlFive2 } from "react-icons/im";
// import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

function Skills() {
  return (
    //
    <ul className=" text-xs md:text-base text-slate-400 flex items-center gap-3 flex-wrap mb-3 md:mb-9 md:pl-1 leading-5 *:mb-[-10px]">
      <li className="">
        {/*   */}
        <FaReact className=" inline-block h-4" /> React.js
      </li>
      <li>
        <SiTypescript className="inline-block h-4" /> TypeScript
      </li>
      {/* <li>
              <FaNodeJs className="inline-block h-4" /> JavaScript
            </li>
            <li>
              <ImHtmlFive2 className="inline-block h-4" /> HTML
            </li>
            <li>
              <FaCss3Alt className="inline-block h-4" /> CSS
            </li> */}
      <li>
        <SiTailwindcss className="inline-block h-4" /> Tailwind.CSS
      </li>
    </ul>
  );
}

export default Skills;
