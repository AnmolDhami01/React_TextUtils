import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { Router } from "react-router";
function App() {
  const [mode, setMode] = useState("light");
  const [btnMode, setBtnMode] = useState("btn btn-dark mx-1 my-2");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      setBtnMode("btn btn-light mx-1 my-2");
      showAlert("Dark Mode Has Been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setBtnMode("btn btn-dark mx-1 my-2");
      showAlert("Light Mode Has Been Enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <div style={{ borderBottom: "2px solid white" }}>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        </div>
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Switch>
            <Route exact path="/About">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <TextForm
                heading="Enter the text to analyze below"
                mode={mode}
                btnMode={btnMode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
          {/* <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          btnMode={btnMode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        /> */}
          {/* <About mode={mode} btnMode={btnMode} toggleMode={toggleMode} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
