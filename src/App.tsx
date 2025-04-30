import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/login/login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import SignUp from "./pages/signup/signup";
import Home from "./pages/home/home";
import NotFound from "./pages/fallback/notfound";
import Layout from "./components/layout/Layout";
import StoreProvider from "./context/redux";

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
      <StoreProvider>
        <Router>
          <Routes>
            <Route path="/signup/*" element={<SignUp />} />
            <Route path="/signin" element={<Login />} />
            {auth ? (
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
              </Route>
            ) : (
              <>
                <Route path="/signin" element={<Login />} />
              </>
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
