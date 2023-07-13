import React, { useState } from "react";
import styles from "./home.module.css";
import Sidebar from "../../component/sidebar/Sidebar";
import Chat from "../../component/chat/Chat";

const Home = () => {
  const [userId, setUserId] = useState(null);
  return (
    <div className={styles.container}>
      <Sidebar setUserId={setUserId} />
      <Chat userId={userId} setUserId={setUserId} />
    </div>
  );
};

export default Home;
