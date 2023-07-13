import React from "react";
import styles from "./home.module.css";
import Sidebar from "../../component/sidebar/Sidebar";
import Chat from "../../component/chat/Chat";

const Home = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
