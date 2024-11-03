import reactImg from "./assets/React.webp";
import Projects from "./components/Projects";
import Info from "./components/Info";
import Header from "./components/Header";
import Name from "./components/Name";
import Button from "./components/Button";

function App() {
  return (
    <>
      <main
        style={{ backgroundImage: `url(${reactImg})` }}
        className="bg-slate-950 bg-cover bg-blend-overlay bg-no-repeat h-screen w-screen flex pt-12 2xl:items-center 2xl:justify-between relative 2xl:px-10 flex-col 2xl:flex-row 2xl:gap-0 gap-20"
      >
        <Header />
        <div className=" text-white relative px-5 md:px-10 2xl:px-0 2xl:w-1/2">
          <Name className="" />
          <Info />
          <div className=" px-1 flex flex-wrap gap-6 md:mt-6 justify-start 2xl:justify-start">
            <Button
              name="email me"
              color="bg-lime-600"
              email="amr24850@gmail.com"
            />
            <Button name="download my resume" />
          </div>
        </div>
        <Projects />
      </main>
    </>
  );
}

export default App;
