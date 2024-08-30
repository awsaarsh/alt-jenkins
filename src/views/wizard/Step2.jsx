// Step2.jsx
import React from "react";

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div className="step-out">
      <h3>2. Geographic location you want to compare your fund?</h3>
      <ul>
        <li>
          <div>
            <span className="option-number">A</span>
          </div>
          <div className="option">Asia</div>
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
          <div className="option">Europe</div>
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
          <div className="option">USA</div>
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
            <span className="option-number">D</span>
          </div>
          <div className="option">Canada</div>
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

export default Step2;
