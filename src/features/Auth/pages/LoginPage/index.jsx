import React from "react";
import PropTypes from "prop-types";
import LoginForm from "./../../components/LoginForm/index";
import authApi from "./../../../../api/authApi";

LoginPage.propTypes = {};

function LoginPage(props) {
  const handleSubmitLoginForm = async (data) => {
    const wordListArray = Object.values(data);
    const wordListString = wordListArray.join(" ");
    const result = await authApi.login({ mnemonic: wordListString });
    localStorage.setItem("hdKey", result.data.hdKey);
    localStorage.setItem("publicKey", result.data.publicKey);
  };
  return (
    <div>
      <LoginForm handleSubmitLoginForm={handleSubmitLoginForm}></LoginForm>
    </div>
  );
}

export default LoginPage;
