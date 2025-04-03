import { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "./context/AuthProvider";
import Forgot from "./pages/forgot/forgot";

function App() {
  //change auth and work on home page
  //addrouting
  const AuthSettings = useContext(AuthContext);
  const [auth, setAuth] = useState<Boolean>(
    AuthSettings.userToken ? true : false
  );
  //je suis azer 123 azd azdazd

  // const navigate = useNavigate();
  useEffect(() => {
    //   navigate("/login");
    console.log(AuthSettings.userToken + "done ");
    if (AuthSettings.userToken) setAuth(true);
    else setAuth(false);
  }, [AuthSettings.userToken]);
  useEffect(() => {
    console.log(AuthSettings.userToken + "done ");
  }, []);
  return (
    <>
      <h1>Layout</h1>
      <Router>
        <Routes>
          {!auth ? (
            <>
              <Route index element={<Login />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/signup/*" element={<SignUp />} />
              <Route path="/forgot/*" element={<Forgot />} />
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
