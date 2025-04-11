import ProfessorStepper from "@/pages/professorStepper/professorStepper";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./steppers.module.css";
import { Button } from "@/components/ui/button";
import ProgressBar from "../progressBar/ProgressBar";
import StudentStepper from "@/pages/studentStepper/studentStepper";
import Popup from "@/components/common/popup/popup";
import { Post } from "@/services/api";
import { useNavigate } from "react-router";
import { StepperContext } from "@/context/StepperProvider";
import { PopupContext } from "@/context/PopupProvider";
import DateStepper from "@/pages/dateStepper/dateStepper";

export default function Steppers() {
  const localStudentData =
    JSON.parse(localStorage.getItem("studentData")) ?? [];
  const localProfessorData =
    JSON.parse(localStorage.getItem("professorData")) ?? [];

  const localFromDate =
    localStorage.getItem("fromDate") ?? JSON.stringify(new Date());
  const localToDate =
    localStorage.getItem("toDate") ?? JSON.stringify(new Date());
  const sliderRef = useRef<HTMLDivElement>(null);
  const [studentData, setStudentData] = useState<any[]>(localStudentData);
  const [professorData, setProfessorData] = useState<any[]>(localProfessorData);
  const [fromDate, setFromDate] = useState<Date | null>(
    new Date(JSON.parse(localFromDate))
  );
  const [toDate, setToDate] = useState<Date | null>(
    new Date(JSON.parse(localToDate))
  );

  const [pagination, setPagination] = useState<number>(1);

  const [finalize, setFinalize] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [sendStatus, setSendStatus] = useState<number>(0);

  const Navigate = useNavigate();
  const StepperSettings = useContext(StepperContext);
  const PopupSettings = useContext(PopupContext);

  function checkDate() {
    return fromDate && toDate && fromDate <= toDate;
  }
  function saveDates() {
    localStorage.setItem("fromDate", JSON.stringify(fromDate));
    localStorage.setItem("toDate", JSON.stringify(toDate));
  }
  function handlePrev() {
    setPagination((prev) => Math.max(1, prev - 1));
  }
  function handleNext() {
    if (pagination == 1 && !checkDate()) {
      //animate before decline
      if (sliderRef.current)
        sliderRef.current.style.transform = "translateX(1em)";
      setTimeout(() => {
        if (sliderRef.current)
          sliderRef.current.style.transform = "translateX(0)";
      }, 200);
      //decline
      return;
    }
    if (pagination == 1) {
      saveDates();
    }
    setPagination((prev) => Math.min(6, prev + 1));
    if (pagination == 6) {
      //handle done
      setFinalize(true);
    }
  }
  async function sendData() {
    const studentData = await localStorage.getItem("studentData");
    const professorData = await localStorage.getItem("professorData");

    //if (!studentData || !professorData) return;
    /*
    const ret = await Post("", {
      studentData: JSON.parse(studentData),
      professorData: JSON.parse(professorData),
    });*/
    const ret = { status: 1000, ok: 1 };
    console.log(ret);
    if (ret.ok == 1) {
      //all good
      //change context
      StepperSettings.setStepperPhase(true);

      //navigate to dashboard
      Navigate("/");
    } else {
      //notify error TODO
    }
  }

  useEffect(() => {
    if (finalize && !check) {
      //send data backend
      setCheck(true);
    }
  }, [finalize]);

  useEffect(() => {
    if (check) {
      PopupSettings.setPopup(true);
    } else {
      //turn it all off
      console.log("here");
      PopupSettings.setPopup(false);
      setCheck(false);
      setFinalize(false);
      setSendStatus(0);
    }
  }, [check]);

  useEffect(() => {
    if (sendStatus) {
      if (sendStatus == -1) {
        //not done yet
        setCheck(false);
      } else {
        //done with all
        setCheck(false);
        sendData();
      }
    }
  }, [sendStatus]);
  return (
    <div id={styles.container}>
      {check && (
        <Popup
          setSendStatus={setSendStatus}
          message="Confirm Finished Steppers Please"
        />
      )}
      <div className="spanner" id={styles.controller}>
        <Button onClick={handlePrev} disabled={pagination == 1}>
          Previous
        </Button>
        <ProgressBar page={pagination} />
        <Button onClick={handleNext} disabled={finalize}>
          {pagination < 6 ? "Next" : "Done"}
        </Button>
      </div>
      <div className="spanner" id={styles.pagingContainer}>
        <div
          ref={sliderRef}
          className="spanner"
          id={styles.paging}
          style={{ transform: `translateX(${-100 * (pagination - 1)}%)` }}
        >
          <DateStepper
            fromDate={fromDate}
            toDate={toDate}
            setToDate={setToDate}
            setFromDate={setFromDate}
          />
          <StudentStepper data={studentData} setData={setStudentData} />
          <ProfessorStepper data={professorData} setData={setProfessorData} />
        </div>
      </div>
    </div>
  );
}
