import "./termsofuse_Style.scss";
import React, { useContext, useEffect } from "react";
import { Context } from "../../../utils/Context";
import { fetchDataFromApi } from "../../../utils/api";

const TermsOfUse = () => {
  const { pdata, setPdata } = useContext(Context);

  useEffect(() => {
    getPrivacyPolicy();
  }, []);

  const getPrivacyPolicy = () => {
    fetchDataFromApi("/api/termsofuses?populate=*").then((res) => {
      setPdata(res);
    });
  };

  console.log(pdata);

  return (
    <div className="terms-of-use-container">
      <pre>{pdata?.data[0]?.attributes?.termsofuse}</pre>
    </div>
  );
};

export default TermsOfUse;
