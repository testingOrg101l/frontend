import { DataTable } from "@/components/common/data-table/data-table";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthProvider";
import React, { useContext } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import data from "../../app/dashboard/data.json";
function Home() {
  const navigate = useNavigate();
  const AuthSettings = useContext(AuthContext);
  function logout() {
    // AuthSettings.setUser(null)
    AuthSettings.setUserToken(null);
    navigate("/");
  }
  return (
    <>
      <div>Home</div>
      <Button onClick={logout}>Logout</Button>
      <DataTable data={data} />
    </>
  );
}

export default Home;
