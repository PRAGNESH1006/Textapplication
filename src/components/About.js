import React from "react";
import '../index.css';

export default function About(props) {
  let newStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#44515e" : "rgb(223, 202, 164)",
    border:"none",
    borderRadius:"20px"
  };

  return (
    <div className="container" >
      <div className="  accordion " id="accordionExample" style={{ color: props.mode === "dark" ? "white" : "black",}} >
        <h1 className="my-2 mx-2">About</h1>
        <div className="accordion-item my-2 mx-2" style={newStyle}>
          <h2 className="accordion-header" style={newStyle}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={newStyle}
            >
              <strong>Text_Manipulation</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={newStyle}
          >
            <div className="accordion-body" style={newStyle}>
              <strong>It can manipulate text.</strong>
              <code></code>
              It can change Text font family and remove space and provide total words of perticular text
              You can convert text to upercase or lowercase,clear text,copy text,count time to read text,count total words in text.
              <p>This are the funciton upercase,lowercase,cleartext,change font,copytext,resetfont</p>
            </div>
          </div>
        </div>
        <div className="accordion-item my-2 mx-2" style={newStyle}>
          <h2 className="accordion-header" style={newStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={newStyle}
            >
              <strong> Share website</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={newStyle}
          >
            <div className="accordion-body" style={newStyle}>
              <strong>Share this website to your friends and family.</strong> 
              <p>By sharing this you can help us </p>
              <p><a href="https://textmanipulation.vercel.app/"></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
