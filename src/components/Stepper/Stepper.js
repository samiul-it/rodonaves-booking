import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";
import { FaBoxOpen } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Stepper = () => {
  const fields = [
    {
      fieldLabel: "Altura",
      placeholder: "00 CM ",
      reqLabel: "* obrigatório",
    },
    {
      fieldLabel: "Largura",
      placeholder: "00 CM ",
      reqLabel: "* obrigatório",
    },
    {
      fieldLabel: "Comprimento",
      placeholder: "00 CM ",
      reqLabel: "* obrigatório",
    },
    {
      fieldLabel: "Quantidade",
      placeholder: "00  ",
      reqLabel: "* obrigatório",
    },
    {
      fieldLabel: "Peso volume",
      placeholder: "00  CM",
      reqLabel: "* obrigatório",
    },
    {
      fieldLabel: "Valor NF",
      placeholder: "R$ 00,00",
      reqLabel: "* obrigatório",
    },
  ];
  const stepThreeFields = [
    {
      fieldLabel: "Valor do frete",
      placeholder: "R$ 145,90",
      reqLabel: "* obrigatório",
    },
    {
      fieldLabel: "Peso total",
      placeholder: "100KG ",
      reqLabel: "*obrigatório",
    },
    {
      fieldLabel: "Valor total da NF",
      placeholder: "R$1.200,09 ",
      reqLabel: "* obrigatório",
    },
  ];
  const stepFourFields = [
    {
      fieldLabel: "Nome completo",
      placeholder: "Digite aqui seu nome completo",
      reqLabel: "* obrigatório",
    },
    {
      fieldLabel: "E-mail",
      placeholder: "Digite aqui",
      reqLabel: "* obrigatório",
    },
    {
      fieldLabel: "Celular",
      placeholder: "(XX) 0000-0000 ",
      reqLabel: "* obrigatório",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [addOne, setAddOne] = useState(20);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const proceedNextStep = () => {
    if (addOne < 120) {
      setAddOne(addOne + 20);
    }
  };
  const proceedPrevStep = () => {
    if (addOne >= 20) {
      setAddOne(addOne - 20);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className="flex justify-center">
      <div className=" card lg:w-[520px]   rounded-none">
        <div className="card-body">
          <div className="label">
            <span className="label-text text-[#00002e] text-sm ">
              Etapa <span className="font-bold"> {addOne / 20}</span> DE{" "}
              <span className="font-bold">6</span>
            </span>
          </div>
          {addOne <= 20 ? (
            <p className="text-[#8a603d] text-2xl lg:text-3xl lg:pl-[20px] pl-[6px]  ">
              <FaBoxOpen />
            </p>
          ) : (
            <></>
          )}
          {addOne == 40 ? (
            <p className="text-[#8a603d] text-3xl  lg:pl-[95px]  pl-[58px]">
              <FaBoxOpen />
            </p>
          ) : (
            <></>
          )}
          {addOne == 60 ? (
            <p className="text-[#8a603d] text-3xl  lg:pl-[180px] pl-[110px]">
              <BsFillBoxSeamFill />
            </p>
          ) : (
            <></>
          )}
          {addOne == 80 ? (
            <p className="text-[#8a603d] text-3xl  lg:pl-[255px] pl-[175px] ">
              <BsFillBoxSeamFill />
            </p>
          ) : (
            <></>
          )}
          {addOne == 100 ? (
            <p className="text-[#8a603d] text-3xl  lg:pl-[335px] pl-[235px]">
              <BsFillBoxSeamFill />
            </p>
          ) : (
            <></>
          )}
          {addOne == 120 ? (
            <p className="text-[#8a603d] text-3xl  lg:pl-[415px] pl-[290px]">
              <BsFillBoxSeamFill />
            </p>
          ) : (
            <></>
          )}
          {/* custom progressbar  */}
          <div className="grid grid-cols-6 gap-4">
            {addOne >= 20 ? (
              <div className="bg-[#0000ff] lg:w-[70px] h-[7px]"></div>
            ) : (
              <div className="bg-[#f1f1f1] lg:w-[70px] h-[7px]"></div>
            )}
            {addOne >= 40 ? (
              <div className="bg-[#0000ff] lg:w-[70px] h-[7px]"></div>
            ) : (
              <div className="bg-[#f1f1f1] lg:w-[70px] h-[7px]"></div>
            )}
            {addOne >= 60 ? (
              <div className="bg-[#0000ff] lg:w-[70px] h-[7px]"></div>
            ) : (
              <div className="bg-[#f1f1f1] lg:w-[70px] h-[7px]"></div>
            )}
            {addOne >= 80 ? (
              <div className="bg-[#0000ff] lg:w-[70px] h-[7px]"></div>
            ) : (
              <div className="bg-[#f1f1f1] lg:w-[70px] h-[7px]"></div>
            )}
            {addOne >= 100 ? (
              <div className="bg-[#0000ff] lg:w-[70px] h-[7px]"></div>
            ) : (
              <div className="bg-[#f1f1f1] lg:w-[70px] h-[7px]"></div>
            )}
            {addOne >= 120 ? (
              <div className="bg-[#0000ff] lg:w-[70px] h-[7px]"></div>
            ) : (
              <div className="bg-[#f1f1f1] lg:w-[70px] h-[7px]"></div>
            )}
          </div>
          {/* Steps  */}
          {/* step-1  */}
          {addOne == 20 ? (
            <>
              <p>
                <span className="text-[#00002e] text-lg font-bold">
                  Informações de origem e destino
                </span>
              </p>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-[#00002e] text-sm font-bold">
                    CEP de origem
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Digite aqui
              "
                  className="input  w-full  bg-[#f1f1f1]"
                />
                <div className="label">
                  <span className="label-text-alt text-[#ff8b84]">
                    * este campo não pode ficar vazio
                  </span>
                </div>

                <div className="label">
                  <span className="label-text text-[#00002e] text-sm font-bold">
                    CEP de destino
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Digite aqui
              "
                  className="input  w-full  bg-[#f1f1f1]"
                />
                <div className="label">
                  <span className="label-text-alt text-[#ff8b84]">
                    * este campo não pode ficar vazio
                  </span>
                </div>

                <div className="label">
                  <span className="label-text text-[#00002e] text-xs font-semibold">
                    Informações de pagamento
                  </span>
                </div>
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:radio-primary radio-sm"
                    checked
                  />
                  <span className="label-text text-[#00002e] text-xs ">
                    Pago pelo remetente (CIF)
                  </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:radio-primary radio-sm"
                    checked
                  />
                  <span className="label-text text-[#00002e] text-xs ">
                    Pago pelo destinatário
                  </span>
                </label>
              </label>
            </>
          ) : (
            <></>
          )}
          {addOne == 40 ? (
            <>
              <p>
                <span className="text-[#00002e] text-lg font-bold">
                  Especificação da Mercadoria
                </span>
              </p>
              <label className="form-control lg:w-[520px]">
                <div className="grid lg:grid-cols-3 ">
                  {fields.map((field, index) => (
                    <div key={index}>
                      <div className="label">
                        <span className="label-text  text-[#00002e] text-sm font-semibold">
                          {field.fieldLabel}
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        className="input w-full lg:w-[120px] bg-[#f1f1f1]"
                      />
                      <div className="label">
                        <span className="label-text-alt text-[#ff8b84]">
                          {field.reqLabel}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-2xl flex justify-center mt-5">
                  <span className="text-[#0000ff]">
                    {" "}
                    <FiPlusCircle />
                  </span>
                </p>
                <p className="text-sm font-semibold flex justify-center mt-2">
                  <span className="text-[#fe5146]">Remover especificações</span>
                </p>
              </label>
            </>
          ) : (
            <></>
          )}
          {addOne == 60 ? (
            <>
              <p>
                <span className="text-[#00002e] text-lg font-bold">
                  Dados do seu frete
                </span>
              </p>
              <label className="form-control lg:w-[520px]">
                <div className="grid lg:grid-cols-3 ">
                  {stepThreeFields.map((field, index) => (
                    <div key={index}>
                      <div className="label">
                        <span className="label-text  text-[#00002e] text-sm font-semibold">
                          {field.fieldLabel}
                        </span>
                      </div>
                      <p className="p-3 input w-full lg:w-[120px] bg-[#f1f1f1] font-semibold">
                        {field.placeholder}
                      </p>
                      <div className="label">
                        <span className="label-text-alt text-[#ff8b84]">
                          {field.reqLabel}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs flex justify-center mt-5 font-semibold">
                  Previsão de Entrega:
                  <span className="text-[#0000ff] font-bold">
                    {" "}
                    5 dias úteis
                  </span>
                </p>
              </label>
            </>
          ) : (
            <></>
          )}
          {addOne == 80 ? (
            <>
              <p>
                <span className="text-[#00002e] text-lg font-bold">
                  Contato
                </span>
              </p>
              <label className="form-control lg:w-[520px]">
                <div className="grid lg:grid-cols-1 ">
                  {stepFourFields.map((field, index) => (
                    <div key={index}>
                      <div className="label">
                        <span className="label-text  text-[#00002e] text-sm font-semibold">
                          {field.fieldLabel}
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        className="input w-full lg:w-[465px] bg-[#f1f1f1]"
                      />
                      <div className="label">
                        <span className="label-text-alt text-[#ff8b84]">
                          {field.reqLabel}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs flex justify-center mt-5 font-semibold">
                  Previsão de Entrega:
                  <span className="text-[#0000ff] font-bold">
                    {" "}
                    5 dias úteis
                  </span>
                </p>
              </label>
              <p>
                <span className="text-[#00002e] text-lg font-bold">Origem</span>
              </p>

              <div className="label">
                <span className="label-text  text-[#00002e] text-sm font-semibold">
                  CNPJ
                </span>
              </div>
              <input
                type="text"
                placeholder="Digite seu CNPJ aqui"
                className="input w-full lg:w-[465px] bg-[#f1f1f1]"
              />
              <div className="label">
                <span className="label-text-alt text-[#ff8b84]">
                  * obrigatório
                </span>
              </div>

              <div className="flex justify-between ">
                <div className="">
                  <div className="label">
                    <span className="label-text  text-[#00002e] text-sm font-semibold">
                      Estado origem
                    </span>
                  </div>
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="lg:w-[200px] btn  flex justify-between "
                    >
                      SP <IoIosArrowDown />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="label ">
                    <span className="label-text  text-[#00002e] text-sm font-semibold">
                      Cidade
                    </span>
                  </div>
                  <p className="input lg:w-[230px] font-semibold p-3 bg-[#f1f1f1]">
                    {"Ribeirão Preto"}
                  </p>
                </div>
              </div>
              <div className="label">
                <span className="label-text  text-[#00002e] text-sm font-semibold">
                  CEP
                </span>
              </div>
              <p className="p-3 input w-full lg:w-[465px] bg-[#f1f1f1] font-semibold">
                {" "}
                14020-200
              </p>
              <div className="flex justify-between ">
                <div className="">
                  <div className="label">
                    <span className="label-text  text-[#00002e] text-sm font-semibold">
                      Estado origem
                    </span>
                  </div>
                  <p className="input lg:w-[220px] font-semibold p-3 bg-[#f1f1f1]">
                    {"Av. Presidente Vargas"}
                  </p>
                </div>
                <div>
                  <div className="label ">
                    <span className="label-text  text-[#00002e] text-sm font-semibold">
                      Número
                    </span>
                  </div>
                  <p className="input lg:w-[230px] font-semibold p-3 bg-[#f1f1f1]">
                    {"111"}
                  </p>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="">
                  <div className="label">
                    <span className="label-text  text-[#00002e] text-sm font-semibold">
                      Bairro
                    </span>
                  </div>
                  <p className="input lg:w-[220px] font-semibold p-3 bg-[#f1f1f1]">
                    {"Jardim Canadá"}
                  </p>
                </div>
                <div>
                  <div className="label ">
                    <span className="label-text  text-[#00002e] text-sm font-semibold">
                      Complemento
                    </span>
                  </div>
                  <p className="input lg:w-[230px]  p-3 bg-[#f1f1f1]">
                    {"Digite aqui"}
                  </p>
                </div>
              </div>
              <p>
                <span className="text-[#00002e] text-lg font-bold">
                  Destino
                </span>
              </p>
              <div className="label">
                <span className="label-text  text-[#00002e] text-sm font-semibold">
                  CNPJ
                </span>
              </div>
              <input
                type="text"
                placeholder="Digite seu CNPJ aqui"
                className="input w-full lg:w-[465px] bg-[#f1f1f1]"
              />
              <div className="label">
                <span className="label-text-alt text-[#ff8b84]">
                  * obrigatório
                </span>
              </div>

              <div className="flex justify-between ">
                <div className="">
                  <div className="label">
                    <span className="label-text  text-[#00002e] text-sm font-semibold">
                      Estado origem
                    </span>
                  </div>
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="lg:w-[200px] btn  flex justify-between "
                    >
                      SP <IoIosArrowDown />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="label ">
                    <span className="label-text  text-[#00002e] text-sm font-semibold">
                      Cidade
                    </span>
                  </div>
                  <p className="input lg:w-[230px] font-semibold p-3 bg-[#f1f1f1]">
                    {"Ribeirão Preto"}
                  </p>
                </div>
              </div>
              <div className="label">
                <span className="label-text  text-[#00002e] text-sm font-semibold">
                  CEP
                </span>
              </div>
              <p className="p-3 input w-full lg:w-[465px] bg-[#f1f1f1] font-semibold">
                {" "}
                14020-200
              </p>
              <div className="flex justify-between ">
                <div className="">
                  <div className="label">
                    <span className="label-text  text-[#00002e] text-sm font-semibold">
                      Estado origem
                    </span>
                  </div>
                  <p className="input lg:w-[220px] font-semibold p-3 bg-[#f1f1f1]">
                    {"Av. Presidente Vargas"}
                  </p>
                </div>
                <div>
                  <div className="label ">
                    <span className="label-text  text-[#00002e] text-sm font-semibold">
                      Número
                    </span>
                  </div>
                  <p className="input lg:w-[230px] font-semibold p-3 bg-[#f1f1f1]">
                    {"111"}
                  </p>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="">
                  <div className="label">
                    <span className="label-text  text-[#00002e] text-sm font-semibold">
                      Bairro
                    </span>
                  </div>
                  <p className="input lg:w-[220px] font-semibold p-3 bg-[#f1f1f1]">
                    {"Jardim Canadá"}
                  </p>
                </div>
                <div>
                  <div className="label ">
                    <span className="label-text  text-[#00002e] text-sm font-semibold">
                      Complemento
                    </span>
                  </div>
                  <p className="input lg:w-[230px]  p-3 bg-[#f1f1f1]">
                    {"Digite aqui"}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[9px] font-semibold">
                {" "}
                * Os dados pessoais coletados para a efetuação de seu cadastro
                serão utilizados para responder sua solicitação de cotação e
                para material de campanhas de marketing/promocional e, estão em
                conformidade com os requisitos da LGPD. Mais detalhes sobre o
                uso de seus dados pessoais podem ser acessados na{" "}
                <span className="font-bold underline">
                  {" "}
                  Política de privacidade.{" "}
                </span>{" "}
              </p>
            </>
          ) : (
            <></>
          )}
          {addOne == 100 ? (
            <>
              <p>
                <span className="text-[#00002e] text-2xl font-semibold">
                  Resumo da cotação
                </span>
              </p>
              <div className="bg-[#fafafa]  rounded-2xl p-4">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-[#00002e] text-lg font-bold">
                      Informações de origem
                    </span>
                  </div>

                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    Endereço:{" "}
                    <span className="font-normal">
                      Av. Presidente Vargas, 2001
                    </span>
                  </p>
                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    Bairro: <span className="font-normal">Jardim Canadá</span>
                  </p>
                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    Complemento:{" "}
                    <span className="font-normal text-[#a3a3a3]">
                      não possui
                    </span>
                  </p>
                  <div className="flex ">
                    <p className="label-text text-[#00002e] text-lg font-semibold">
                      Cidade::{" "}
                      <span className="font-normal ">Ribeirão Preto</span>
                    </p>
                    <p className="label-text text-[#00002e] text-lg font-semibold">
                      Estado: <span className="font-normal ">SP</span>
                    </p>
                  </div>
                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    CEP: <span className="font-normal ">14022-110</span>
                  </p>
                  <div className="divider"></div>
                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    CNPJ:{" "}
                    <span className="font-normal ">12.124.995/0001-11</span>
                  </p>
                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    Razão social::{" "}
                    <span className="font-normal ">Jardim Canadá</span>
                  </p>
                </label>
              </div>
              <div className="bg-[#fafafa]  rounded-2xl p-4">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-[#00002e] text-lg font-bold">
                      Informações de origem
                    </span>
                  </div>

                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    Endereço:{" "}
                    <span className="font-normal">
                      Av. Presidente Vargas, 2001
                    </span>
                  </p>
                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    Bairro: <span className="font-normal">Jardim Canadá</span>
                  </p>
                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    Complemento:{" "}
                    <span className="font-normal text-[#a3a3a3]">
                      não possui
                    </span>
                  </p>
                  <div className="flex ">
                    <p className="label-text text-[#00002e] text-lg font-semibold">
                      Cidade::{" "}
                      <span className="font-normal ">Ribeirão Preto</span>
                    </p>
                    <p className="label-text text-[#00002e] text-lg font-semibold">
                      Estado: <span className="font-normal ">SP</span>
                    </p>
                  </div>
                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    CEP: <span className="font-normal ">14022-110</span>
                  </p>
                  <div className="divider"></div>
                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    CNPJ:{" "}
                    <span className="font-normal ">12.124.995/0001-11</span>
                  </p>
                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    Razão social::{" "}
                    <span className="font-normal ">Jardim Canadá</span>
                  </p>
                </label>
              </div>
              <div className="bg-[#fafafa]  rounded-2xl p-4">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-[#00002e] text-lg font-bold">
                      Informações da carga
                    </span>
                  </div>

                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    Peso total da mercadoria{" "}
                  </p>
                  <p className="label-text text-[#00002e] text-lg ">100KG</p>

                  <div className="divider"></div>

                  <p className="label-text text-[#00002e] text-lg font-semibold">
                    Valor total da nota fiscal{" "}
                  </p>
                  <p className="label-text text-[#00002e] text-lg ">
                    R$ 290,00
                  </p>
                </label>
              </div>
            </>
          ) : (
            <></>
          )}
          {addOne == 120 ? (
            <>
              <div className="grid justify-items-center mt-4">
                <div className="avatar bg-[#fff]">
                  <div className="w-44 rounded">
                    <img src="https://img.freepik.com/premium-psd/delivery-cardboard-paper-box-packaging-mockup_439185-5426.jpg" />
                  </div>
                </div>
              </div>
              <div className=" bg-[#fafafa]  rounded-2xl p-4">
                <div className="grid justify-items-center form-control w-full ">
                  <div className="label">
                    <span className="label-text text-[#00002e] text-2xl font-bold">
                      Parabéns!
                    </span>
                  </div>

                  <p className="label-text pt-3 text-[#00002e] text-sm ">
                    Sua coleta está agendada para o dia:{" "}
                  </p>
                  <p className="label-text text-[#0000ff] text-sm ">
                    30/11/2023
                  </p>
                  <p className="label-text pt-3 text-[#00002e] text-sm ">
                    Este é seu número de protocolo:{" "}
                  </p>
                  <p className="label-text text-[#0000ff] text-sm ">
                    123456789
                  </p>

                  <p className="label-text pt-3 lg:w-[280px] text-[#00002e] text-xs ">
                    Um de nossos consultores entrará em contato para informar as
                    condições de pagamento.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {/* fwd/bckwd button  */}
          {addOne < 101 ? (
            <>
              <div className="grid grid-cols-2 gap-2 mt-5">
                <button
                  onClick={proceedNextStep}
                  className="btn bg-[#0000ff] text-[#f1f1f1] text-xs rounded-2xl"
                >
                  <FaArrowRightLong />
                  AVANCAR
                </button>
                <button
                  onClick={proceedPrevStep}
                  className="btn btn-ghost text-[#0000ff] rounded-2xl text-xs"
                >
                  {addOne > 21 ? <>VOLTAR</> : <>LIMPAR BUSCA</>}
                </button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <button
                onClick={proceedNextStep}
                className="btn bg-[#0000ff] mt-5 text-[#f1f1f1] text-xs  rounded-2xl"
              >
                FINALIZAR
              </button>
            </>
          )}

          <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
