import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const steps = [
    <Step1
      key="step1"
      nextStep={nextStep}
      handleChange={handleChange}
      formData={formData}
    />,
    <Step2
      key="step2"
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      formData={formData}
    />,
    <Step3
      key="step3"
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      formData={formData}
    />,
    <Step4
      key="step4"
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      formData={formData}
    />,
    <Step5 key="step5" prevStep={prevStep} formData={formData} />,
  ];

  return (
    <TransitionGroup>
      <CSSTransition
        key={step}
        timeout={300}
        classNames="fade"
        mountOnEnter
        unmountOnExit
      >
        {steps[step - 1]}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Form;
