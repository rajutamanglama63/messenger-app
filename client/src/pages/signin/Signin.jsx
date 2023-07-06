import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signin.module.css";

const Signin = () => {
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
      setValidationErr({ ...validationErr, passwordErr: "Weak password!" });
    } else {
      setValidationErr({ ...validationErr, passwordErr: "", emailErr: "" });
    }
  }, [credentials]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user input: ", credentials);
    if (credentials.email === "" && credentials.password === "") {
      setValidationErr((prevValidationErr) => ({
        ...prevValidationErr,
        emailErr: "Email required!",
        passwordErr: "Password required!",
      }));
    }
  };
  return (
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
            <button className={styles.btn + " " + styles.google}>Google</button>
          </div>
          <span onClick={() => navigate("/signup")} className={styles.linker}>
            Not registered yet! Signup.
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signin;
