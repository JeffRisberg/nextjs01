import React from "react";
import Marker from "@/components/marker";
import Button from "@/components/button";
import styles from "../pages.module.css";

const DashboardPage = () => (
   <div className={styles.page}>
      <h1>Dashboard Page</h1>

      <p>
         This dashboard gives you a quick overview of what matters most.
         Duis aute irure dolor in reprehenderit in voluptate velit esse
         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit
         anim id est laborum.
      </p>

      <Marker/>
      <Button/>
      <Marker/>
   </div>
);

export default DashboardPage;
