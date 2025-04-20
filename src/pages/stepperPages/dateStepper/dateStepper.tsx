import { DataTable } from "@/components/common/data-table/data-table";
import styles from "./dateStepper.module.css";
import React, { useEffect } from "react";
import { DatePicker } from "@/components/common/datePicker/datePicker";
interface personStepperType {
  fromDate: Date | null;
  toDate: Date | null;
  setFromDate: any;
  setToDate: any;
}
export default function DateStepper(props: personStepperType) {
  const setFromDate = props.setFromDate;
  const setToDate = props.setToDate;
  const fromDate = props.fromDate;
  const toDate = props.toDate;

  return (
    <div id={styles.container}>
      <h1>Soutenances</h1>
      <div className="column">
        <div className="spanner" id={styles.date}>
          <h3>From</h3>
          <DatePicker setMainDate={setFromDate} date={fromDate} />
        </div>
        <div className="spanner" id={styles.date}>
          <h3>To</h3>
          <DatePicker setMainDate={setToDate} date={toDate} />
        </div>
      </div>
    </div>
  );
}
