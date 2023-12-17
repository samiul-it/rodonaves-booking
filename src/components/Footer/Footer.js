import React from "react";
import { BsDot } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#f1f1f1] text-base-content text-[#00002e] font-semibold">
        <nav className="lg:pl-40 ">
          <header className=" font-bold">
            <span className="text-[#00002e] text-lg ">Contato</span>
          </header>
          <a className="link link-hover  ">Unidades</a>
          <a className="link link-hover">Seja um parceiro</a>
          <a className="link link-hover">Imprensa</a>
          <a className="link link-hover">Canal ético</a>
          <a className="link link-hover">Fale conosco</a>
          <a className="link link-hover">Área do parceiro</a>
        </nav>
        <nav>
          <header className=" font-bold text-[#00002e] text-lg">
            Sobre a Rodonaves
          </header>
          <a className="link link-hover">Quem Somos</a>
          <a className="link link-hover">Sustentabilidade</a>
          <a className="link link-hover">Notícias</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Sobre o envio</a>
          <a className="link link-hover">Certificações</a>
          <a className="link link-hover">Trabalhe conosco</a>
        </nav>
        <nav>
          <header className=" font-bold text-[#00002e] text-lg ">
            Grupo Rodonaves
          </header>
          <a className="link link-hover">Sobre o Grupo</a>
          <a className="link link-hover">ESG</a>
          <a className="link link-hover">Canal ético e integridade</a>
        </nav>
        <nav>
          <header className=" font-bold text-[#00002e] text-lg ">
            Redes Sociais
          </header>

          <div className="grid grid-cols-2 gap-2">
            <div className="avatar placeholder">
              <div className="bg-[#dadada]  text-neutral-content rounded-full w-12">
                <span className="text-3xl">
                  {" "}
                  <a className="link link-hover text-[#535353]">
                    <FaLinkedin />
                  </a>
                </span>
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="bg-[#dadada] text-neutral-content rounded-full w-12">
                <span className="text-3xl">
                  {" "}
                  <a className="link link-hover text-[#535353]">
                    <FaYoutube />
                  </a>
                </span>
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="bg-[#dadada]  text-neutral-content rounded-full w-12">
                <span className="text-3xl">
                  {" "}
                  <a className="link link-hover text-[#535353]">
                    <FaFacebook />
                  </a>
                </span>
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="bg-[#dadada]  text-neutral-content rounded-full w-12">
                <span className="text-3xl">
                  {" "}
                  <a className="link link-hover text-[#535353]">
                    <FaSquareInstagram />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>

        <aside className=" lg:pr-20">
          <a className="  border-b-4 border-[#f5821f] ">
            <span className="text-[#0054a6] text-3xl  font-black ">
              RODONAVES
            </span>{" "}
          </a>
          <p>
            <span className="text-xs 	text-[#171741]	">UMA EMPRESA DO </span>
            <br />
            <span className="text-[#0000ff] text-lg font-bold">GRUPO</span>
            <br />
            <span className="text-[#0000ff] text-2xl font-bold">RODONAVES</span>
          </p>
        </aside>
      </footer>
      {/* Copyright  */}

      <footer className="footer items-center p-4 bg-[#0000ff] text-neutral-content">
        <aside className="items-center grid-flow-col lg:pl-44">
          <p> © Rodonaves 1970-2023</p>
        </aside>
        <nav className="flex items-center justify-center gap-1 md:place-self-center  md:justify-self-end  lg:pr-44">
          <a>
            <p>
              {" "}
              <span>Política de Cookie</span>{" "}
            </p>
          </a>{" "}
          <BsDot />
          <a>
            <p>Termos de Uso</p>
          </a>
          <BsDot />
          <a>
            <p>Política de Privacidade</p>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
