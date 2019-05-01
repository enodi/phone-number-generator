import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Button from "../../components/Button";
import { getPhoneNumbers, downloadPhoneNumbers } from "../../../helpers/config";
import "./style.scss";

const DetailsPage = () => {
  const [phoneNumber, setPhoneNumbers] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await getPhoneNumbers();
      setPhoneNumbers(response.data.data);
    }
    fetchData();
  }, []);

  const handleDownload = async () => {
    const response = await downloadPhoneNumbers();
    const numbers = (response.data.randomPhoneNumbers).join("\n");
    const url = window.URL.createObjectURL(new Blob([numbers]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "phone-numbers.txt");
    document.body.appendChild(link);
    link.click();
  };

  const redirectToHomePage = () => {
    window.location.href = "/";
  };

  return (
    <Fragment>
      <Header />
      <SubHeader title="View the largest and smallest number generated"/>
      <div className="number-display">
        <div className="content">
          <h2>Largest Phone Number: <span>{phoneNumber.largestNumber}</span></h2>
          <h2>Smallest Phone Number: <span>{phoneNumber.smallestNumber}</span></h2>
          <h2>Total Phone Numbers Generated: <span>{phoneNumber.totalPhoneNumbersGenerated}</span></h2>
        </div>
        <div className="content__button">
          <Button
            id="btn"
            className="download__button"
            text="Download File"
            type="button"
            onClick={handleDownload}
          />
          <Button
            id="btn"
            className="return__button"
            text="Return to Home Page"
            type="button"
            onClick={redirectToHomePage}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default DetailsPage;
