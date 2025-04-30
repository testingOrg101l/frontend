import { DataTable } from "@/components/common/data-table/data-table";
import FileUpload from "@/components/specific/fileUpload/fileUpload";
import styles from "./professerStepper.module.css";
import React from "react";
interface personStepperType {
  data: any[];
  setData: any;
}
export default function ProfessorStepper(props: personStepperType) {
  const setData = props.setData;
  const data = props.data;
  return (
    <div id={styles.container}>
      <h3 className={styles.title}>Professors List</h3>
      <DataTable
        data={data}
        dataKey="professorData"
        setExternalData={setData}
      />
      <FileUpload setData={setData} dataKey="professorData" />
    </div>
  );
}
