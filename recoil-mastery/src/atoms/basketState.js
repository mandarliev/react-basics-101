import { atom, selectorFamily } from "recoil";

export const basketState = atom({
  key: "basketState",
  default: [],
});

export const numberOfItemInBasket = selectorFamily({
  key: "numberOfItemInBasket",
  get:
    (itemId) =>
    ({ get }) => {
      const basket = get(basketState);
      const basketWithItem = basket.filter(
        (basketItem) => basketItem.id === itemId
      );

      return basketWithItem.length;
    },
});
