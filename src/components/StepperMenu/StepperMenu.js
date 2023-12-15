import React from "react";
import Stepper from "awesome-react-stepper";

const StepperMenu = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" card lg:w-[420px] lg:h-[580px] bg-[#f44444] shadow-xl rounded-none">
          <div className="">
            <p>
              Etapa <span className="font-bold">1</span> DE{" "}
              <span className="font-bold">6</span>
            </p>
            <Stepper
              strokeColor="#17253975"
              fillStroke="#172539"
              activeColor="#172539"
              activeProgressBorder="15px solid #ffffff "
              submitBtn={<button className="stepperBtn">Submit</button>}
              continueBtn={<button className="stepperBtn">Next</button>}
              backBtn={<button className="stepperBtn">Back</button>}
              onSubmit={(step) => alert(`Thank you!!! Final Step -> ${step}`)}
            >
              <div className="stepperSubDiv">
                <h1>Welcome to Awesome React Stepper</h1>
                <h1>Welcome to Awesome React Stepper</h1>
                <h1>Welcome to Awesome React Stepper</h1>
                <h1>Welcome to Awesome React Stepper</h1>
              </div>
              <div className="stepperSubDiv">
                <h1>Add your content here!!!</h1>
              </div>
              <div className="stepperSubDiv">
                <h1>Thank you for using Awesome React Stepper</h1>
              </div>
              <div className="stepperSubDiv">
                <h1>Thank you for using Awesome React Stepper</h1>
              </div>
              <div className="stepperSubDiv">
                <h1>Thank you for using Awesome React Stepper</h1>
              </div>
            </Stepper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepperMenu;
