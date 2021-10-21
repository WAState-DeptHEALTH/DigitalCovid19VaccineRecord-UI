import React, { useEffect } from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const SplashScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"received-screen-container bodyContainer"}>
      <div>
        <h1 style={{ color: "#F06724", fontSize: "38px", marginTop: "25px" }}>
          <Trans i18nKey="SplashScreenpage.title">
            Welcome to WA Verify!
          </Trans>
        </h1>
      </div>
      <div style={{ textAlign: "center"}}>
            To access your online verification records, please select from the options below.
            <br />
            If you have questions about WA Verify, please call 800-525-0127, press #
      </div>
      <div style={{border: "1px solid black"}}>
        {/* Left Pane */}
        <div id="PaneLeft">
          WA Verify<br />
          <img src="/imgs/waverifylogo.png" height='71px' width='263px' alt="WaVerify Logo" /><br />
          If you are looking for your State COVID-19 Verification Record with QR Code
          <ul>
            <li>*Available in 40 languages</li>
            <li>*SMART Health Card compatible</li>
          </ul>
          <img src="/imgs/add-to-apple-health.svg"  alt="Add to Apple Health Logo" />
          <img src="/imgs/smart-logo.svg"  alt="SmartHealth Logo" />
          <div style="border: 1px solid black; background-color: lightgreen;">
            <Link to="/Dashboard"  style={{
            color: "#0d6efd",
            margin: "0",
            textDecoration: "underline",
            }}>Access Here</Link>
          </div>                
        </div>  

      </div>                     
    </div>
  );  
};

export default SplashScreen;
