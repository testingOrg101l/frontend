import ProfessorStepper from "@/pages/professorStepper/professorStepper";
import React, { useState } from "react";
import styles from "./steppers.module.css";
import { Button } from "@/components/ui/button";
import ProgressBar from "../progressBar/ProgressBar";
import StudentStepper from "@/pages/studentStepper/studentStepper";

export default function Steppers() {
  const localStudentData =
    JSON.parse(localStorage.getItem("studentData")) ?? [];
  const localProfessorData =
    JSON.parse(localStorage.getItem("professorData")) ?? [];
  const [studentData, setStudentData] = useState<any[]>(localStudentData);
  const [professorData, setProfessorData] = useState<any[]>(localProfessorData);
  const [pagination, setPagination] = useState<number>(1);

  function handlePrev() {
    setPagination((prev) => Math.max(1, prev - 1));
  }
  function handleNext() {
    setPagination((prev) => Math.min(5, prev + 1));
  }
  return (
    <div id={styles.container}>
      <div className="spanner" id={styles.controller}>
        <Button onClick={handlePrev} disabled={pagination == 1}>
          Previous
        </Button>
        <ProgressBar page={pagination} />
        <Button onClick={handleNext} disabled={pagination == 5}>
          Next
        </Button>
      </div>
      <div className="spanner" id={styles.pagingContainer}>
        <div
          className="spanner"
          id={styles.paging}
          style={{ transform: `translateX(${-100 * (pagination - 1)}%)` }}
        >
          <StudentStepper data={studentData} setData={setStudentData} />
          <ProfessorStepper data={professorData} setData={setProfessorData} />
        </div>
      </div>
    </div>
  );
}
