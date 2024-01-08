import { useRecoilValue } from "recoil";
import { basketState } from "./atoms/basketState";
import "./App.css";
import Product from "./Product";
import Quote from "./components/Quote";
import { Suspense } from "react";
import Spinner from "react-spinkit";

function App() {
  const basket = useRecoilValue(basketState);

  return (
    <div className="App">
      <h1>Our Shopping App</h1>
      <h2>The total number of items in your basket: {basket.length}</h2>

      <Suspense fallback={<Spinner name="double-bounce" fadeIn="none" />}>
        <Quote />
      </Suspense>

      <br />
      <Product id={123123} title="iPhone 12" price={999} />
      <br />
      <Product id={465645} title="iPad" price={1599} />
    </div>
  );
}

export default App;
