import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./taskSlice";


export default configureStore({
  reducer: {
   tasks:tasksSlice
  },
});
