import { createSlice } from "@reduxjs/toolkit";

const getFavoriteCount = () => {
  const favoriteCars = JSON.parse(localStorage.getItem("favoriteCars") || "[]");
  return favoriteCars.length;
};

const initialState = {
  count: getFavoriteCount(),
  inputValue: "",
  carCount: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  setCount,
  incrementCarCount,
  decrementCarCount,
} = counterSlice.actions;

export default counterSlice.reducer;
