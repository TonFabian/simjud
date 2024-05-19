import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-3xl sm:text-2xl text-lg font-bold py-2">
            Quer dicas & truques para otimizar seu tempo?
          </h1>
          <p>Siga e fique por dentro.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Digite seu e-mail"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 py-3 ">
              Notificar
            </button>
          </div>
          <p>
            Nos preocupamos com a proteção dos seus dados. Leia nossa{" "}
            <span className="text-[#00df9a] hover:cursor-pointer">
              Política de Privacidade.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
