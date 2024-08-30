// Step2.jsx
import React from "react";

const Step4 = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div className="step-out">
      <h3>4. Fund Size you want to compare</h3>
      <ul>
        <li>
          <div>
            <span className="option-number">A</span>
          </div>
          <div className="option">Upto 50 Mn USD</div>
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
          <div className="option">50 Mn to 500 Mn</div>
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
          <div className="option">50 Mn to 500 Mn</div>
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
        <button onClick={nextStep} className="btn ml-1">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4;
