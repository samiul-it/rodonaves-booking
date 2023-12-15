import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";
import { FaBoxOpen } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [addOne, setAddOne] = useState(20);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const proceedNextStep = () => {
    if (addOne < 100) {
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
      <div className=" card lg:w-[420px]   rounded-none">
        <div className="card-body">
          <div className="label">
            <span className="label-text text-[#00002e] text-sm ">
              Etapa <span className="font-bold">1</span> DE{" "}
              <span className="font-bold">6</span>
            </span>
          </div>
          {addOne <= 20 ? (
            <p className="text-[#8a603d] text-3xl pl-[20px]  ">
              <FaBoxOpen />
            </p>
          ) : (
            <></>
          )}
          {addOne == 40 ? (
            <p className="text-[#8a603d] text-3xl  pl-[75px] ">
              <FaBoxOpen />
            </p>
          ) : (
            <></>
          )}
          {addOne == 60 ? (
            <p className="text-[#8a603d] text-3xl  pl-[145px] ">
              <BsFillBoxSeamFill />
            </p>
          ) : (
            <></>
          )}
          {addOne == 80 ? (
            <p className="text-[#8a603d] text-3xl  pl-[195px] ">
              <BsFillBoxSeamFill />
            </p>
          ) : (
            <></>
          )}
          {addOne == 100 ? (
            <p className="text-[#8a603d] text-3xl  pl-[285px] ">
              <BsFillBoxSeamFill />
            </p>
          ) : (
            <></>
          )}
          <progress
            style={{ color: "#0000ff" }}
            className="progress w-[350px] bg-[#f1f1f1]"
            value={addOne}
            max="100"
          ></progress>
          <p>
            <span className="text-[#00002e] text-lg font-bold">
              Informações de origem e destino
            </span>
          </p>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-[#00002e] text-sm font-bold">
                CEP de origem
              </span>
            </div>
            <input
              type="text"
              placeholder="Digite aqui
              "
              className="input  w-full max-w-xs bg-[#f1f1f1]"
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
              className="input  w-full max-w-xs bg-[#f1f1f1]"
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
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={proceedNextStep}
              className="btn bg-[#0000ff] text-[#f1f1f1] text-xs "
            >
              <FaArrowRightLong />
              AVANCAR
            </button>
            <button
              onClick={proceedPrevStep}
              className="btn btn-ghost text-[#0000ff] text-xs"
            >
              LIMPAR BUSCA
            </button>
          </div>
          <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />,
        </div>
      </div>
    </div>
  );
};

export default Stepper;
