import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Product from "./Product";

/**
 *
 * BEM - Block Element Modifier:
 *  app__title
 *  app__title--large
 *  app__title--small
 */

// Functional component
function App() {
  const isMale = true;

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault(); // This prevents a REFRESH
    setTodos([...todos, input]);
    setInput("");
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {user}</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  return (
    <div className="app">
      <Header />
      {getGreeting()}
      <h2 className="app__title">
        You are a {isMale ? "Male" : "Female"} & this is a title
      </h2>
      <h3 className="app__title app__title--large">This is a LARGE title</h3>
      <h3 className="app__title--small">This is a small title</h3>
      <h2>The count is {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <Product
        name="Amazon Echo"
        description="Your AI assistant"
        price={59.99}
      />
      <Product
        name="iPhone 12 Pro Max"
        description="The best iPhone"
        price={1200}
      />
      <Product
        name="Macbook Pro"
        description="Your Favourite Computer"
        price={2499}
      />
      <h1>Welcome to my TODO list</h1>
      <form>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add todo
        </button>
      </form>

      <h2>List of Todos</h2>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}

export default App;
