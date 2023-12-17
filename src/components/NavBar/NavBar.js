import React from "react";
import { RxExit } from "react-icons/rx";
import { BsDot } from "react-icons/bs";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-[#0000ff]">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-[#ffffff] lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0000ff] rounded-box w-52 text-[#ffffff] font-semibold"
            >
              {/* Mobile  */}
              <li>
                <a>
                  ENVIAR MERCADORIA <BsDot />
                </a>
              </li>
              <li>
                <a>
                  SERVICOS <BsDot />
                </a>
              </li>
              <li>
                <a>
                  CIDADES E PRAZOS <BsDot />
                </a>
              </li>
              <li>
                <a>
                  QUEM SOMOS <BsDot />
                </a>
              </li>
              <li>
                <a>FALE CONOSCO</a>
              </li>
            </ul>
          </div>
          <a className=" text-2xl font-bold lg:pl-48">
            <span className="text-[#ffffff] border-b-2  border-[#f5821f]">
              RODONAVES
            </span>{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center  px-1 text-xs text-[#ffffff] font-semibold ">
            {/* Desktop  */}
            <li className="p-2">
              <a>ENVIAR MERCADORIA</a>
            </li>
            <BsDot />
            <li className="p-2">
              <a>SERVICOS</a>
            </li>
            <BsDot />
            <li className="p-2">
              <a>CIDADES E PRAZOS</a>
            </li>
            <BsDot />
            <li className="p-2">
              <a>QUEM SOMOS</a>
            </li>
            <BsDot />
            <li className="p-2">
              <a>FALE CONOSCO</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:pr-48">
          <a className="btn  font-bold bg-[#ffffff] text-[#0000ff] rounded-2xl">
            {" "}
            <RxExit />
            ENTRAR
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
