import React, { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./addFriendModal.module.css";
import { ModalDisplayContext } from "../../../context/ModalDisplayContext";

const AddFriendModal = () => {
  const { display, handleDisplay } = useContext(ModalDisplayContext);

  const openModal = display ? styles.open_modal : null;
  const closeModal = !display ? styles.close_modal : null;

  const [username, setUsername] = useState("");
  const [validationErr, setValidationErr] = useState("");

  const err_outline = validationErr !== "" ? styles.err_outline : null;

  useEffect(() => {
    if (username !== "" && username.length <= 2) {
      setValidationErr("Invalid username!");
    } else if (username !== "" && username.length >= 8) {
      setValidationErr("Invalid username");
    } else {
      setValidationErr("");
    }
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("friend: ", username);
    if (username === "") {
      setValidationErr("Username required!");
    } else {
      setValidationErr("");
    }
  };

  return (
    <div className={styles.modal + " " + openModal + " " + closeModal}>
      <div className={styles.content}>
        <div className={styles.top_part}>
          <h4>Add a friend!</h4>
          <Icon
            icon="maki:cross"
            onClick={handleDisplay}
            className={styles.icon}
          />
        </div>

        <form>
          <div className={styles.field}>
            <label className={styles.label}>Friend's name</label>
            <input
              className={styles.input_field + " " + err_outline}
              placeholder="Enter friend's username..."
              type="text"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className={styles.err}>
              {validationErr !== "" ? validationErr : null}
            </span>
          </div>

          <button className={styles.btn} onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFriendModal;
