import { configureStore } from '@reduxjs/toolkit';

import CarUi from './CarUi';
import cardSlide from './cardSlide';

const store = configureStore({
  reducer: {
    cartUi: CarUi.reducer,
    cart: cardSlide.reducer,
  },
});

export default store;
