import React, { useContext } from "react";
import styles from "./chat.module.css";
import { UserContext } from "../../context/UserContext";
import AddFriendModal from "../modals/addFriendModal/AddFriendModal";

const Chat = ({ userId }) => {
  const users = useContext(UserContext);
  const selectedUser =
    users.length > 0 ? users.find((userObj) => userObj.id === userId) : null;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <div className={styles.chat_room}> */}
        <div className={styles.chat_room_status}>
          {selectedUser?.username ??
            "No friend :( Click add friend to start chatting."}
        </div>
        <div className={styles.modal_placement}>
          <AddFriendModal />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Chat;
