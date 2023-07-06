import React, { useEffect, useState } from "react";
import styles from "./signup.module.css";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [validationErr, setValidationErr] = useState({
    usernameErr: "",
    passwordErr: "",
  });

  const pswd_err_outline =
    validationErr.passwordErr !== "" ? styles.err_outline : null;

  const username_err_outline =
    validationErr.usernameErr !== "" ? styles.err_outline : null;

  // useEffect(() => {
  //   if ((credentials.password !== "") & (credentials.password.length <= 3)) {
  //     setValidationErr({ ...validationErr, passwordErr: "Weak password!" });
  //   } else if (
  //     (credentials.username !== "") &
  //     (credentials.username.length > 8)
  //   ) {
  //     setValidationErr({ ...validationErr, usernameErr: "Invalid username!" });
  //   } else {
  //     setValidationErr({ ...validationErr, passwordErr: "" });
  //   }
  // }, [credentials]);

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
        usernameErr: "",
      }));
    }
  }, [credentials, setValidationErr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user input: ", credentials);
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
              className={styles.input_field}
              placeholder="example@example.com"
              type="email"
              // value={credentials.email}
            />
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
        </form>
      </div>
    </div>
  );
};

export default Signup;
