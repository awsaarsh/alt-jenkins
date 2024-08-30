// Step3.jsx
import React from "react";

const Step5 = ({ prevStep, formData }) => {
  const submitForm = () => {
    console.log("Form submitted:", formData);
  };

  const handleChange = (input) => (e) => {
    formData[input] = e.target.value;
  };

  return (
    <div className="step-out">
      <h3>5. Provide the range you want in chart</h3>
      <ul>
        <li>
          <div>
            <span className="option-number">A</span>
          </div>
          <div className="option">50 Mn to 55 Mn</div>
          <div class="checkbox-content">
            <span>
              <svg height="13" width="16">
                <path
                  d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"
                  fill="rgb(1, 66, 172)"
                ></path>
              </svg>
            </span>
          </div>
        </li>
        <li>
          <div>
            <span className="option-number">B</span>
          </div>
          <div className="option">55 Mn to 60 Mn</div>
          <div class="checkbox-content">
            <span>
              <svg height="13" width="16">
                <path
                  d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"
                  fill="rgb(1, 66, 172)"
                ></path>
              </svg>
            </span>
          </div>
        </li>
        <li>
          <div>
            <span className="option-number">C</span>
          </div>
          <div className="option">Custom Range Please enter</div>
          <div class="checkbox-content">
            <span>
              <svg height="13" width="16">
                <path
                  d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"
                  fill="rgb(1, 66, 172)"
                ></path>
              </svg>
            </span>
          </div>
        </li>
      </ul>
      <div className="col-sm-12">
        <button onClick={prevStep} className="btn ml-2">
          Back
        </button>
        <button onClick={submitForm} className="btn ml-1">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step5;
