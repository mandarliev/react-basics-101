import "./App.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitFormToGoogle = (data) => {
    console.log("You submitted the form");
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
    <div className="app">
      <h1>Hello World</h1>
      <form>
        <TextField
          name="name"
          {...register("name", { required: true })}
          id="outlined-basic"
          label="Name"
          variant="standard"
        />
        {errors.name?.type === "required" && (
          <p role="alert">Name is required</p>
        )}
        <TextField
          name="age"
          {...register("age", { required: true })}
          id="outlined-basic"
          label="Age"
          variant="standard"
        />
        {errors.age?.type === "required" && <p role="alert">Age is required</p>}

        <TextField
          name="salary"
          {...register("salary", { required: true })}
          id="outlined-basic"
          label="Salary"
          variant="standard"
        />
        {errors.salary?.type === "required" && (
          <p role="alert">Salary is required</p>
        )}

        <TextField
          name="hobby"
          {...register("hobby", { required: true })}
          id="outlined-basic"
          label="Hobby"
          variant="standard"
        />
        {errors.hobby?.type === "required" && (
          <p role="alert">Hobby is required</p>
        )}

        <Button
          type="submit"
          onClick={handleSubmit(submitFormToGoogle)}
          variant="outlined"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
