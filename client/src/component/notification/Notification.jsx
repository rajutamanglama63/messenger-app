import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./notification.module.css";

const Notification = () => {
  const [notificationErr, setNotificationErr] = useState(
    "This is notification."
  );
  const notification = notificationErr !== "" ? styles.show : styles.hide;
  return (
    <div className={styles.container + " " + notification}>
      <span className={styles.text}>This is notification notifying you.</span>

      <span className={styles.close_btn}>
        <Icon icon="material-symbols:close" className={styles.close_icon} />
      </span>
    </div>
  );
};

export default Notification;
