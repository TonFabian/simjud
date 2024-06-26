import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">SIMUJUDI AULAS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6">SIMUJUDI</h1>
        <div className="flex justify-center items-center flex-wrap">
          <p className="md:text-xl sm:text-xl text-lg font-bold">
            Compreendendo o Judiciário com&nbsp;
            <ReactTyped
              className="md:text-xl sm:text-xl text-lg font-bold md:pl-4 pl-1"
              strings={["Precisão e Velocidade"]}
              typeSpeed={130}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <p className="md:text-xl text-lg font-bold text-gray-500 mt-4">
          "No SIMUJUDI, garantimos que todas as informações jurídicas são
          tratadas com a máxima segurança e confidencialidade."
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
          Comece agora
        </button>
      </div>
    </div>
  );
};

export default Hero;
