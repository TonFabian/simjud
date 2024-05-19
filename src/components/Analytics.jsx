import React from "react";
import Justice from "../assets/justice.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Justice} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">AULAS PERSONALIZADAS</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Estude no seu tempo
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            natus cumque ea est molestias, quod neque facere delectus
            repudiandae, perferendis vitae asperiores exercitationem autem quos,
            omnis inventore eligendi laudantium nemo.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Comece Agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
