import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { basketState, numberOfItemInBasket } from "./atoms/basketState";

function Product({ id, title, price }) {
  const [basket, setBasket] = useRecoilState(basketState);

  const count = useRecoilValue(numberOfItemInBasket(id));

  console.log(basket);

  const addItemToBasket = () => {
    const item = {
      id,
      title,
      price,
    };
    setBasket([...basket, item]);
  };

  const removeItemFromBasket = () => {
    const index = basket.findIndex((basketItem) => basketItem.id === id);
    let newBasket = [...basket];

    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn(`Can't remove product (id: ${id}) as its not in basket!`);
    }
    setBasket(newBasket);
  };
  return (
    <div>
      <h2>{title}</h2>
      <h3>${price}</h3>
      <button onClick={addItemToBasket}>+</button>
      <p>{count}</p>
      <button onClick={removeItemFromBasket}>-</button>
    </div>
  );
}

export default Product;
