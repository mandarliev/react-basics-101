import "./App.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const submitFormToGoogle = (data) => {
    console.log(data);

    const { name, age, salary, hobby } = data;

    const tableData = {
      name,
      age,
      salary,
      hobby,
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
          name="name"
          {...register("name", { required: true })}
          id="outlined-basic"
          label="Name"
          variant="standard"
        />
        <TextField
          name="age"
          {...register("age", { required: true })}
          id="outlined-basic"
          label="Age"
          variant="standard"
        />
        <TextField
          name="salary"
          {...register("salary", { required: true })}
          id="outlined-basic"
          label="Salary"
          variant="standard"
        />
        <TextField
          name="hoby"
          {...register("hobby", { required: true })}
          id="outlined-basic"
          label="Hobby"
          variant="standard"
        />
        <Button type="submit" onClick={handleSubmit(submitFormToGoogle)}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
