import React, { Fragment, useState } from "react";
import Swal from "sweetalert2";

import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import { generatePhoneNumbers } from "../../../helpers/config";
import "./style.scss";

const GenerateRandomNumber = () => {
  const [specifiedNumber, setSpecifiedNumber] = useState();
  const [order, setOrder] = useState(false);

  const handleOnChange = (event) => {
    setSpecifiedNumber(event.target.value);
  };

  const toggleOrder = () => {
    setOrder(!order);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const MAX_NUMBER = 10000;
    const MIN_NUMBER = 0;
    let sortBy;

    order ? sortBy = "desc" : sortBy = "asc";

    if (specifiedNumber === undefined || specifiedNumber <= MIN_NUMBER) {
      Swal.fire(":(", `Number cannot be less than ${MIN_NUMBER}`, "error");
    } else if (specifiedNumber > MAX_NUMBER) {
      Swal.fire(":(", `Number cannot be greater than ${MAX_NUMBER}`, "error");
    } else {
      generatePhoneNumbers(specifiedNumber, sortBy);
      window.location.href = "/details";
    }
  };

  return (
    <Fragment>
      <Header />
      <SubHeader title="Enter a number to generate your random phone numbers"/>
      <div className="content-container">
        <form onSubmit={handleOnSubmit}>
          <InputField
            id="input-field"
            placeholder="Number of Phone Numbers"
            className="generate-number__input"
            type="number"
            name="input-field"
            onChange={handleOnChange}
          />
          <InputField
            type="checkbox"
            label="Please specify an order. Order set to ascending by default"
            className="generate-number__checkbox"
            onClick={toggleOrder}
          />
          <Button
            id="btn"
            className="generate-number__button"
            text="Generate Phone Number"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default GenerateRandomNumber;
