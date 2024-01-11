import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    props.showAlert("Converted to Lowercase", "success");
    setText(newText);
  };

  const handleCopyClick =()=>{
    var copyText = document.getElementById("mybox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy to clipboard", "success");
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text", "success");
  };

  // This is for typing or adding text into text area
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleFontClick = () => {
    document.getElementById("mybox").style.fontFamily = "cursive";
    props.showAlert("Change Font", "success");
  };

  const handleReFontClick = () => {
    document.getElementById("mybox").style.fontFamily =
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
    props.showAlert("Reset Font", "success");
  };

  const [text, setText] = useState("Enter Text Here");
  return (
    <div
      className={`container`}
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <div>
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="mybox"
            rows={8}
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#474646" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
        </div>
        <button className="btn btn-primary my-1 mx-1" disabled={text.length===0} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-1 mx-1" disabled={text.length===0} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-1 mx-1" disabled={text.length===0} onClick={handleCopyClick}>
          Copy text
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handleClearClick}
          disabled={text.length===0}
        >
          Clear Text
        </button>
        <button className="btn btn-primary my-1 mx-1" disabled={text.length===0} onClick={handleFontClick}>
          Change Font
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handleReFontClick}
          disabled={text.length===0}
        >
          Reset Font
        </button>
      </div>
      <div className="container my-2 ">
        <h2>Your summary</h2>
        <p>
          {" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters{" "}
        </p>
        <p>
          {" "}
          Slow reading time={" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes ( {0.48 * text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length} seconds){" "}
        </p>
        <p>
          {" "}
          Avarage reading time={" "}
          {0.00333 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes ( {0.2 * text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length} seconds){" "}
        </p>
        <h3>Preview</h3>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="mybox"
            rows={8}
            defaultValue={
              text.length>0?text:"Nothing to Preview here"
            }
            style={{
              backgroundColor: props.mode === "dark" ? "#474646" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
        </div>
      </div>
    </div>
  );
}
