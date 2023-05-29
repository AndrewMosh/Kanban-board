import { createSlice} from "@reduxjs/toolkit";
import { loadState, saveState } from './storage';
import { Cards } from "../config";

const taskSlice = createSlice({
  name: "tasks",
  initialState: loadState() || Cards,
  reducers: {
    handleAdd: (state, action) => {
      state[action.payload.id].tasks.push(action.payload.newTask)
      state[action.payload.id].isActive=false
    },
    handleActive: (state, action) => {
      state[action.payload].isActive=true
    },
    moveTask: (state, action) => {
      const objectToMove = state[action.payload.id-1].tasks.find(({name}) => name === action.payload.val);
      state[action.payload.id-1].tasks = state[action.payload.id-1].tasks.filter(obj => obj !== objectToMove);
      state[action.payload.id].tasks = state[action.payload.id].tasks.concat(objectToMove);
      state[action.payload.id].isActive=false  
    },
    removeTask: (state, action) => {
      const arr =state[action.payload.cardId].tasks
      arr.splice(0, arr.length, ...arr.filter(n => n.id !== action.payload.taskId)); 
    },
    editTask:(state, action) => {
      const { cardIndex, id, name, description} = action.payload;
        const targetCard = state[cardIndex];
        const targetTaskIndex = targetCard.tasks.findIndex((task) => task.id === id);
        if (targetTaskIndex < 0) return;
        targetCard.tasks[targetTaskIndex].name = name;     
        targetCard.tasks[targetTaskIndex].description = description; 
    }
  },
});
export const {actions, reducer } =
  taskSlice;
export const {moveTask, handleActive,handleAdd, removeTask,editTask } =
  taskSlice.actions;
export default function mySliceReducer(state, action) {
 const newState = reducer(state, action);
 saveState(newState);
 return newState;
  }
  

