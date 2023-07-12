import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signin.module.css";
import Notification from "../../component/notification/Notification";
import { signinService } from "../../services/authService";

const Signin = ({ serverResponse, setServerResponse }) => {
  // const [serverResponse, setServerResponse] = useState({});
  console.log("server res: ", serverResponse);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [validationErr, setValidationErr] = useState({
    emailErr: "",
    passwordErr: "",
  });

  const pswd_err_outline =
    validationErr.passwordErr !== "" ? styles.err_outline : null;

  const email_err_outline =
    validationErr.emailErr !== "" ? styles.err_outline : null;

  useEffect(() => {
    if ((credentials.password !== "") & (credentials.password.length <= 3)) {
      setValidationErr((prevValidationErr) => ({
        ...prevValidationErr,
        passwordErr: "Weak password!",
      }));
    } else {
      setValidationErr((prevValidationErr) => ({
        ...prevValidationErr,
        passwordErr: "",
        emailErr: "",
      }));
    }
  }, [credentials]);

  useEffect(() => {
    if (serverResponse.emailErrMsg) {
      setValidationErr((prevValidationErr) => ({
        ...prevValidationErr,
        emailErr: serverResponse.emailErrMsg,
      }));
    } else if (serverResponse.pswdErrMsg) {
      setValidationErr((prevValidationErr) => ({
        ...prevValidationErr,
        passwordErr: serverResponse.pswdErrMsg,
      }));
    } else {
      setValidationErr((prevValidationErr) => ({
        ...prevValidationErr,
        passwordErr: "",
        emailErr: "",
      }));
    }
  }, [serverResponse]);

  const clearField = () => {
    setCredentials({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user input: ", credentials);

    const resData = await signinService(credentials);
    console.log("data res from server: ", resData);

    setServerResponse(resData);

    if (credentials.email === "" && credentials.password === "") {
      setValidationErr((prevValidationErr) => ({
        ...prevValidationErr,
        emailErr: "Email required!",
        passwordErr: "Password required!",
      }));
    }

    clearField();
  };

  return (
    <>
      <Notification
        serverResponse={serverResponse}
        setServerResponse={setServerResponse}
      />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 style={{ textAlign: "center" }}>Signin</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input
                className={styles.input_field + " " + email_err_outline}
                placeholder="example@example.com"
                type="text"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
              <span className={styles.err}>
                {validationErr.emailErr !== "" ? validationErr.emailErr : null}
              </span>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Password</label>
              <input
                className={styles.input_field + " " + pswd_err_outline}
                placeholder="password"
                type="text"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />

              <span className={styles.err}>
                {validationErr.passwordErr !== ""
                  ? validationErr.passwordErr
                  : null}
              </span>
            </div>
            <div className={styles.btns}>
              <button className={styles.btn}>Signin</button>
              <span className={styles.or}>- OR -</span>
              <button className={styles.btn + " " + styles.google}>
                Google
              </button>
            </div>
            <span onClick={() => navigate("/signup")} className={styles.linker}>
              Not registered yet! Signup.
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
