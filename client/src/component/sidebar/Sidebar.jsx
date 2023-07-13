import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import styles from "./sidebar.module.css";
import { UserContext } from "../../context/UserContext";
import { ModalDisplayContext } from "../../context/ModalDisplayContext";

const Sidebar = ({ setUserId }) => {
  const { handleDisplay } = useContext(ModalDisplayContext);
  const users = useContext(UserContext);

  const tabHandler = (id) => {
    setUserId(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.add_friend} onClick={handleDisplay}>
          <h4>Add friend</h4>
          <Icon icon="gala:chat" />
        </div>
        {users.length > 0
          ? users.map((user) => (
              <React.Fragment key={user.id}>
                <div
                  className={styles.friend}
                  key={user.id}
                  onClick={() => tabHandler(user.id)}
                >
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
