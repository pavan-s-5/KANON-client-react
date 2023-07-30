import "./privacyPolicy_Styles.scss";
import React, { useContext, useEffect } from "react";
import { Context } from "../../../utils/Context";
import { fetchDataFromApi } from "../../../utils/api";

const PrivacyPolicy = () => {
  const { pdata, setPdata } = useContext(Context);

  useEffect(() => {
    getPrivacyPolicy();
  }, []);

  const getPrivacyPolicy = () => {
    fetchDataFromApi("/api/privacypolicies?populate=*").then((res) => {
      setPdata(res);
    });
  };

  console.log(pdata);

  return (
    <div className="privacy-policy-container">
      <h3>Kanon.in Privacy Notice</h3>
      <pre>{pdata?.data[0]?.attributes?.privacypolicy}</pre>
    </div>
  );
};

export default PrivacyPolicy;
