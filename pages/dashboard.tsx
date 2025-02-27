import React from "react";
import Marker from "../components/marker";
import Button from "../components/button";
import styles from "./pages.module.css";

const DashboardPage = () => (
   <div className={styles.page}>
      <h1>Dashboard Page</h1>

      <Marker/>
      <Button/>
      <Marker/>
   </div>
);

export default DashboardPage;
