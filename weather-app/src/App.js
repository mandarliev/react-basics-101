import React from "react";
import "./App.css";
import { useEffect } from "react";

import axios from "axios";

const options = {
  method: "GET",
  url: "https://open-weather-map27.p.rapidapi.com/weather",
  headers: {
    "X-RapidAPI-Key": "0ca030f99amshf53c07229b47eb7p13a768jsn6c2df59a7595",
    "X-RapidAPI-Host": "open-weather-map27.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

function App() {
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
    </div>
  );
}

export default App;
