import styles from "../pages.module.css";
import Marker from "@/components/marker";
import Button from "@/components/button";
import React from "react";

const WorksheetPage = () => (
   <div className={styles.page}>
      <h1>Worksheet page</h1>

      <p>
         This worksheet lets you work through the details step by step.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat.
      </p>

      <Marker/>
      <Button/>
      <Marker/>
   </div>
);

export default WorksheetPage;
