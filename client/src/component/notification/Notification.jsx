import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./notification.module.css";

const Notification = ({ serverResponse, setServerResponse }) => {
  const [notifications, setNotifications] = useState({
    errMsg: "",
    successMsg: "",
  });

  const closeBtnHandler = () => {
    setServerResponse((prevVal) => ({
      ...prevVal,
      errMsg: "",
      successMsg: "",
    }));
  };

  const errNotice =
    notifications.errMsg !== "" ? styles.err_msg_show : styles.err_msg_hide;
  const successNotice =
    notifications.successMsg !== ""
      ? styles.success_msg_show
      : styles.success_msg_hide;

  useEffect(() => {
    if (serverResponse.errMsg) {
      //   console.log("server response in notification: ", serverResponse.errMsg);
      setNotifications((prevNotification) => ({
        ...prevNotification,
        errMsg: serverResponse.errMsg,
      }));
    } else if (serverResponse.successMsg) {
      setNotifications((prevNotification) => ({
        ...prevNotification,
        successMsg: serverResponse.successMsg,
      }));
    } else {
      setNotifications((prevNotification) => ({
        ...prevNotification,
        errMsg: "",
        successMsg: "",
      }));
    }
  }, [serverResponse]);

  if (notifications.errMsg !== "") {
    return (
      <>
        <div className={styles.err_container + " " + errNotice}>
          <span className={styles.text}>{notifications.errMsg}</span>
          <span className={styles.err_close_btn} onClick={closeBtnHandler}>
            <Icon
              icon="material-symbols:close"
              className={styles.err_close_icon}
            />
          </span>
        </div>
      </>
    );
  } else if (notifications.successMsg !== "") {
    return (
      <>
        <div className={styles.container + " " + successNotice}>
          <span className={styles.text}>{notifications.successMsg}</span>
          <span className={styles.close_btn} onClick={closeBtnHandler}>
            <Icon icon="material-symbols:close" className={styles.close_icon} />
          </span>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Notification;
