import { createSlice } from '@reduxjs/toolkit';

const CarUi = createSlice({
  name: 'cartUi',
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartUiAction = CarUi.actions;
export default CarUi;
