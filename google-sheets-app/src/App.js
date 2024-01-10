import { useRef, useState } from "react";
import "./App.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";

function App() {
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const salaryInputRef = useRef(null);
  const hobbyInputRef = useRef(null);

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");

    const tableData = {
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
      salary: salaryInputRef.current.value,
      hobby: hobbyInputRef.current.value,
    };

    console.log(tableData);

    axios
      .post(
        "https://sheet.best/api/sheets/2608afde-a761-41c4-9c24-39006e13bf62",
        tableData
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <TextField
          inputRef={nameInputRef}
          id="outlined-basic"
          label="Name"
          variant="standard"
        />
        <TextField
          inputRef={ageInputRef}
          id="outlined-basic"
          label="Age"
          variant="standard"
        />
        <TextField
          inputRef={salaryInputRef}
          id="outlined-basic"
          label="Salary"
          variant="standard"
        />
        <TextField
          inputRef={hobbyInputRef}
          id="outlined-basic"
          label="Hobby"
          variant="standard"
        />
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
