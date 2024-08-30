import React from "react";
import Select from "react-select";
import { FormGroup, Input, Label } from "reactstrap";
import SearchSVG from "../../../svgIcons/Search";
function ThirdStep() {
  const options = [
    { value: "U. S. Bank Pension Bank", label: "U. S. Bank Pension Bank" },
    { value: "Ecolab U. S. Pension Bank", label: "Ecolab U. S. Pension Bank" },
    { value: "Monshanto Pension Bank", label: "Monshanto Pension Bank" },
    { value: "Pension Protection Fund", label: "Pension Protection Fund" },
    { value: "FedEx Pension Fund", label: "FedEx Pension Fund" },
  ];

  return (
    <div class="d-flex flex-column align-items-center justify-content-center">
      <FormGroup className="w-100">
        <Label for="exampleSelect">Industry Type</Label>
        <div className="search-area">
          <span className="search-icon">
            <SearchSVG />
          </span>
          <Select className="custom-search" options={options} />
        </div>
      </FormGroup>
      <div className="data-not-available">Your search result appear here.</div>
    </div>
  );
}
export default ThirdStep;
