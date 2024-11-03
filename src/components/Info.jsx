import Skills from "./Skills";

function Info() {
  return (
    <>
      <h2 className=" text-slate-300 mt-7 md:mt-3 text-base md:text-4xl md:px-1 md:mb-3 ">
        front end developer
      </h2>
      <p className=" text-slate-400 text-xs md:text-base md:px-1  md:mb-3">
        MIS graduate based in Cairo, Egypt, building web applications using
      </p>
      <Skills />
    </>
  );
}

export default Info;
