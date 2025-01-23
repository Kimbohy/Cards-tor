import React, { useState } from "react";
import "../assets/styles/Find.css";

function Find() {
  function showFind() {
    const nav = document.querySelector(".nav");
    const find = document.querySelector(".findInputArea");
    console.log("show");
    find.style.width = "250px";
    find.style.height = "50px";
    nav.style.width = "850px";
    find.focus();
  }

  function hideFind() {
    const nav = document.querySelector(".nav");
    const find = document.querySelector(".findInputArea");
    find.style.width = "0";
    find.style.height = "0";
    nav.style.width = "700px";
  }

  return (
    <div id="findArea">
      <svg
        id="find"
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        width="30"
        viewBox="0 0 512 512"
        onClick={showFind}
      >
        <path
          fill="#ffffff"
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        />
      </svg>
        <input
          type="text"
          className="findInputArea"
          onBlur={hideFind}
        />
    </div>
  );
}

export default Find;
