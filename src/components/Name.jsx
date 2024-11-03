import myImg from "../assets/me_1.0.png";

function Name() {
  return (
    <>
      <img
        className=" hidden h-32  absolute top-[-15px] left-64 2xl:left-56 md:block"
        src={myImg}
        alt=""
      />
      <h1 className=" hidden md:block capitalize font-['Bebas_Neue'] font-black tracking-wide leading-[120px] text-[150px]">
        <span className="ml-[5px]">amr</span> <br />
        muhammad
      </h1>
    </>
  );
}

export default Name;
