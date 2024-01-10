import "./App.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const submitFormToGoogle = (data) => {
    axios
      .post(
        "https://sheet.best/api/sheets/2608afde-a761-41c4-9c24-39006e13bf62",
        data
      )
      .then((response) => {
        alert("Row successfully added");
        console.log(response);
      })
      .catch((error) => alert(error.message));
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
