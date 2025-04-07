import { DataTable } from "@/components/common/data-table/data-table";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
//import data from "@/app/dashboard/data.json";
import FileUpload from "@/components/specific/fileUpload/fileUpload";
function Home() {
  const localData = JSON.parse(localStorage.getItem("data")) ?? [];
  const navigate = useNavigate();
  const AuthSettings = useContext(AuthContext);
  const [data, setData] = useState<any[]>(localData);
  function logout() {
    // AuthSettings.setUser(null)
    AuthSettings.setUserToken(null);
    navigate("/");
  }
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div>Home</div>
      <Button onClick={logout}>Logout</Button>
      <DataTable data={data} />
      <FileUpload setData={setData} />
    </>
  );
}

export default Home;
