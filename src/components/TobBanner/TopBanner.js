import React from "react";

const TopBanner = () => {
  return (
    <div className="h-48 lg:h-48 bg-[#030061] border-b-8 border-[#00d2cd]">
      {/* <div class="flex items-center justify-center h-full  ">
        <p class=" text-xl font-bold text-[#ffffff]">
          FACA SUA COTACAO E AGENDAMENTO DE
        </p>
        <br />
        <p class="  text-xl font-bold text-[#ffffff]">
          COLETA EM MENOS DE 2 MINUTOS
        </p>
      </div> */}
      <div className="hero ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="pt-10 lg:pt-10 lg:text-xl font-bold text-[#ffffff]">
              FACA SUA COTACAO E AGENDAMENTO DE
            </h1>
            <p className=" lg:text-xl font-bold text-[#ffffff]">
              COLETA EM MENOS DE 2 MINUTOS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
