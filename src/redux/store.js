import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filters from "./filtersSlice";

const store = configureStore({
  reducer: {
    contacts: {},
    filters: {},
  },
});

export default store;
