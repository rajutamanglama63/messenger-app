import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import styles from "./sidebar.module.css";
import { UserContext } from "../../context/UserContext";

const Sidebar = () => {
  const users = useContext(UserContext);
  console.log("users: ", users);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.add_friend}>
          <h4>Add friend</h4>
          <Icon icon="gala:chat" />
        </div>
        {users.length > 0
          ? users.map((user) => (
              <React.Fragment key={user.id}>
                <div className={styles.friend} key={user.id}>
                  <span className={styles.name}>{user.username}</span>
                  <span className={styles.status + " " + styles.online}></span>
                </div>
              </React.Fragment>
            ))
          : null}
      </div>
    </div>
  );
};

export default Sidebar;
