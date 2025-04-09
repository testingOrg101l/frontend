import React from "react";
import styles from "./progressBar.module.css";
export default function ProgressBar({ page: page }: { page: number }) {
  return (
    <div className="spanner">
      <div
        className={styles.point}
        style={{
          border: page == 1 ? "0.01em solid black" : "none",
          backgroundColor: page > 1 ? "green" : "rgb(206, 199, 199)",
        }}
      ></div>
      <span className={styles.line}></span>
      <div
        className={styles.point}
        style={{
          border: page == 2 ? "0.01em solid black" : "none",
          backgroundColor: page > 2 ? "green" : "rgb(206, 199, 199)",
        }}
      ></div>
      <span className={styles.line}></span>
      <div
        className={styles.point}
        style={{
          border: page == 3 ? "0.01em solid black" : "none",
          backgroundColor: page > 3 ? "green" : "rgb(206, 199, 199)",
        }}
      ></div>{" "}
      <span className={styles.line}></span>
      <div
        className={styles.point}
        style={{
          border: page == 4 ? "0.01em solid black" : "none",
          backgroundColor: page > 4 ? "green" : "rgb(206, 199, 199)",
        }}
      ></div>{" "}
      <span className={styles.line}></span>
      <div
        className={styles.point}
        style={{
          border: page == 5 ? "0.01em solid black" : "none",
          backgroundColor: page > 5 ? "green" : "rgb(206, 199, 199)",
        }}
      ></div>
    </div>
  );
}
