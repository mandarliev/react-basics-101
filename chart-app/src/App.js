import ApexChart from "./ApexChart";
import "./App.css";
import React, { Component } from "react";
import { auth, provider } from "./firebase";

function App() {
 
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message))
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={signIn}>Sign in with Google</button>
      <ApexChart />
    </div>
  );
}

export default App;
