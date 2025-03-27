import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/login/login";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import { Routes } from "react-router";
import { Link } from "react-router-dom";
import SignUp from "./pages/signup/signup";
import Home from "./pages/home/home";
import NotFound from "./pages/fallback/notfound";

function App() {
  //change auth and work on home page
  //addrouting
  const [auth, setAuth] = useState<Boolean>(true);
  //je suis azer 123 azd azdazd

  // const navigate = useNavigate();
  useEffect(() => {
    //   navigate("/login");
  }, []);
  return (
    <>
      <h1>Layout</h1>
      <Router>
        <Routes>
          <Route path="/signup/*" element={<SignUp />} />
          {!auth ? (
            <>
              <Route index element={<Login />} />
              <Route path="/login/*" element={<Login />} />
            </>
          ) : (
            <>
              <Route index element={<Home />} />
              <Route path="/home/*" element={<Home />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
