import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signup.module.css";
import { signupService } from "../../services/authService";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [validationErr, setValidationErr] = useState({
    usernameErr: "",
    emailErr: "",
    passwordErr: "",
  });

  const pswd_err_outline =
    validationErr.passwordErr !== "" ? styles.err_outline : null;

  const username_err_outline =
    validationErr.usernameErr !== "" ? styles.err_outline : null;

  const email_err_outline =
    validationErr.emailErr !== "" ? styles.err_outline : null;

  useEffect(() => {
    if (credentials.password !== "" && credentials.password.length <= 3) {
      setValidationErr((prevValidationErr) => ({
        ...prevValidationErr,
        passwordErr: "Weak password!",
      }));
    } else if (credentials.username !== "" && credentials.username.length > 8) {
      setValidationErr((prevValidationErr) => ({
        ...prevValidationErr,
        usernameErr: "Invalid username!",
      }));
    } else {
      setValidationErr((prevValidationErr) => ({
        ...prevValidationErr,
        passwordErr: "",
        emailErr: "",
        usernameErr: "",
      }));
    }
  }, [credentials, setValidationErr]);

  const clearField = () => {
    setCredentials({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupService(credentials);
    if (
      credentials.email === "" &&
      credentials.username === "" &&
      credentials.password === ""
    ) {
      setValidationErr((prevValidationErr) => ({
        ...prevValidationErr,
        usernameErr: "Username required!",
        emailErr: "Email required!",
        passwordErr: "Password required!",
      }));
    }

    clearField();
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 style={{ textAlign: "center" }}>Signup</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>Username</label>
            <input
              className={styles.input_field + " " + username_err_outline}
              placeholder="username"
              type="text"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
            <span className={styles.err}>
              {validationErr.usernameErr !== ""
                ? validationErr.usernameErr
                : null}
            </span>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input_field + " " + email_err_outline}
              placeholder="example@example.com"
              type="email"
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
            <button className={styles.btn}>Signup</button>
            <span className={styles.or}>- OR -</span>
            <button className={styles.btn + " " + styles.google}>google</button>
          </div>

          <span onClick={() => navigate("/signin")} className={styles.linker}>
            Already registered! Signin.
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
