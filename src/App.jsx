import React from "react";
import AirFryerInterestForm from "./AirFryerInterestForm";
import "./App.css";

function App() {
 return ( 
 <>
 <img src={`${import.meta.env.BASE_URL}spidr-logo.png`} alt="Spidr Logo" />

<img src={`${import.meta.env.BASE_URL}spidr-title.png`} alt="Spidr Title" />
 <AirFryerInterestForm />
 </>
 );
}

export default App
