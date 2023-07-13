import React, { useContext, useEffect } from "react";
import styles from "./addFriendModal.module.css";
import { ModalDisplayContext } from "../../../context/ModalDisplayContext";

const AddFriendModal = () => {
  const { display, handleDisplay } = useContext(ModalDisplayContext);

  const openModal = display ? styles.open_modal : null;
  const closeModal = !display ? styles.close_modal : null;

  return (
    <div className={styles.modal + " " + openModal + " " + closeModal}>
      <div className={styles.content}>
        <h4>Hello from modal!</h4>
        <div className={styles.btn}>
          <button onClick={handleDisplay}>close</button>
        </div>
      </div>
    </div>
  );
};

export default AddFriendModal;
