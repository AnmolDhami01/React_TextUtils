import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared", "success");
  };

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);

    props.showAlert("Text Copied", "success");
  };

  const intoTitleCase = () => {
    let newText = text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(" "));
    props.showAlert("Converted into Title Case", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text here");
  return (
    <>
      <div
        className=" container   mb-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>

        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#212529" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="myBox"
          rows="8"
        ></textarea>
        <button
          disabled={text.length === 0}
          className={props.btnMode}
          onClick={handleUpClick}
        >
          Upper Case
        </button>

        <button
          disabled={text.length === 0}
          className={props.btnMode}
          onClick={handleLoClick}
        >
          Lower Case
        </button>

        <button
          disabled={text.length === 0}
          className={props.btnMode}
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button
          disabled={text.length === 0}
          className={props.btnMode}
          onClick={intoTitleCase}
        >
          Title Case
        </button>

        <button
          disabled={text.length === 0}
          className={props.btnMode}
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          className={props.btnMode}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>

        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} char
        </p>

        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
