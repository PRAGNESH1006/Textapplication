import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  

  const darkMode = () => {
    if (mode === "light") {
      setMode("dark");  
      document.body.style.backgroundColor = "#363e46";
      showAlert("DARK mode enable","success")
    } else {

      setMode("light");
      document.body.style.backgroundColor = "wheat";
      showAlert("LIGHT mode enable","success")

    }
  };

  const showAlert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
  })

  setTimeout(() => {
    setAlert(null)
  }, 2000);
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} darkMode={darkMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter Text here to analyze "
          mode={mode}
          darkMode={darkMode}
          showAlert={showAlert}/>
      </div>
      <About />
    </>
  );
}

export default App;
