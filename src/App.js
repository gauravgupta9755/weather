import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
      <>      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
       
        | Developed by{" "}
        <a target="_blank" href="https://www.gauravghai.dev/">
          Gaurav Gupta
        </a>{" "}
        |
        
      </div>
      </>

  );
}

export default App;
