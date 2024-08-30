import React from "react";

const Step1 = ({ nextStep, handleChange, formData }) => {
  return (
    <div className="step-out custom-first-box">
      <h4>1. What fund id you are looking for benchmark?</h4>
      <div className="col-sm-6">
        <input
          type="text"
          placeholder="Enter the fund id here"
          className="w-100 border p-3 rounded-2"
        />
      </div>
      <ul>
        <li>
          <div>
            <span className="option-number">1</span>
          </div>
          <div className="option">
            <div className="f-name">Fund Name</div>
            <div className="list-of-detl">
              <label>
                Sort by wintage year: <b>200</b>
              </label>
              <label>
                New to old: <b>200</b>
              </label>
              <label>
                Fund ID: <b>200</b>
              </label>
            </div>
          </div>
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
            <span className="option-number">1</span>
          </div>
          <div className="option">
            <div className="f-name">Fund Name</div>
            <div className="list-of-detl">
              <label>
                Sort by wintage year: <b>200</b>
              </label>
              <label>
                New to old: <b>200</b>
              </label>
              <label>
                Fund ID: <b>200</b>
              </label>
            </div>
          </div>
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
            <span className="option-number">1</span>
          </div>
          <div className="option">
            <div className="f-name">Fund Name</div>
            <div className="list-of-detl">
              <label>
                Sort by wintage year: <b>200</b>
              </label>
              <label>
                New to old: <b>200</b>
              </label>
              <label>
                Fund ID: <b>200</b>
              </label>
            </div>
          </div>
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
            <span className="option-number">1</span>
          </div>
          <div className="option">
            <div className="f-name">Fund Name</div>
            <div className="list-of-detl">
              <label>
                Sort by wintage year: <b>200</b>
              </label>
              <label>
                New to old: <b>200</b>
              </label>
              <label>
                Fund ID: <b>200</b>
              </label>
            </div>
          </div>
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
            <span className="option-number">1</span>
          </div>
          <div className="option">
            <div className="f-name">Fund Name</div>
            <div className="list-of-detl">
              <label>
                Sort by wintage year: <b>200</b>
              </label>
              <label>
                New to old: <b>200</b>
              </label>
              <label>
                Fund ID: <b>200</b>
              </label>
            </div>
          </div>
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
            <span className="option-number">1</span>
          </div>
          <div className="option">
            <div className="f-name">Fund Name</div>
            <div className="list-of-detl">
              <label>
                Sort by wintage year: <b>200</b>
              </label>
              <label>
                New to old: <b>200</b>
              </label>
              <label>
                Fund ID: <b>200</b>
              </label>
            </div>
          </div>
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
            <span className="option-number">1</span>
          </div>
          <div className="option">
            <div className="f-name">Fund Name</div>
            <div className="list-of-detl">
              <label>
                Sort by wintage year: <b>200</b>
              </label>
              <label>
                New to old: <b>200</b>
              </label>
              <label>
                Fund ID: <b>200</b>
              </label>
            </div>
          </div>
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
      <button onClick={nextStep} className="btn">
        Next
      </button>
    </div>
  );
};

export default Step1;
