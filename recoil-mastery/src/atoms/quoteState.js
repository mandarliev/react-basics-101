import { atom, selector } from "recoil";

export const quoteState = atom({
  key: "quoteState",
  default: null,
});

export const fetchQuote = selector({
  key: "fetchQuote",
  get: async ({ get }) => {
    const joke = await fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => data.value);

      return joke;
  },
});
