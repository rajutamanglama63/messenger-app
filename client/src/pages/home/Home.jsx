import React, { useContext, useState } from "react";
import styles from "./home.module.css";
import Sidebar from "../../component/sidebar/Sidebar";
import Chat from "../../component/chat/Chat";
// import AddFriendModal from "../../component/modals/addFriendModal/AddFriendModal";

const Home = () => {
  const [userId, setUserId] = useState(null);
  return (
    <div className={styles.container}>
      <Sidebar setUserId={setUserId} />
      <Chat userId={userId} setUserId={setUserId} />
      {/* <div className={styles.modal_placement}> */}
      {/* <AddFriendModal /> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
