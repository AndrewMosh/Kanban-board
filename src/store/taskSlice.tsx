import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Cards } from "../config";
import { Task, allCards } from "../config";

export type TaskSliceActions =
    | ReturnType<typeof moveTask>
    | ReturnType<typeof handleActive>
    | ReturnType<typeof handleAdd>
    | ReturnType<typeof removeTask>
    | ReturnType<typeof editTask>;

const initialState: allCards[] = Cards;

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        handleAdd: (state, action: PayloadAction<{ id: number; newTask: Task }>) => {
            state[action.payload.id].tasks.push(action.payload.newTask);
            state[action.payload.id].isActive = false;
        },
        handleActive: (state, action: PayloadAction<number>) => {
            state[action.payload].isActive = true;
        },
        moveTask: (state, action: PayloadAction<{ id: number; val: string }>) => {
            const objectToMove = state[Number(action.payload.id) - 1].tasks.find(({ name }) => name === action.payload.val);
            if (objectToMove) {
                state[Number(action.payload.id) - 1].tasks = state[Number(action.payload.id) - 1].tasks.filter(
                    (obj) => obj !== objectToMove
                );
                state[Number(action.payload.id)].tasks = state[Number(action.payload.id)].tasks.concat(objectToMove);
                state[Number(action.payload.id)].isActive = false;
            }
        },
        removeTask: (state, action: PayloadAction<{ cardId: number; taskId: number }>) => {
            const arr = state[action.payload.cardId].tasks;
            state[action.payload.cardId].tasks = arr.filter((n) => n.id !== action.payload.taskId);
        },
        editTask: (
            state,
            action: PayloadAction<{
                cardIndex: number;
                id: number;
                name: string;
                description: string;
            }>
        ) => {
            const { cardIndex, id, name, description } = action.payload;
            const targetCard = state[cardIndex];
            const targetTaskIndex = targetCard.tasks.findIndex((task) => task.id === id);
            if (targetTaskIndex >= 0) {
                targetCard.tasks[targetTaskIndex].name = name;
                targetCard.tasks[targetTaskIndex].description = description;
            }
        },
    },
});

export const { actions, reducer } = taskSlice;
export const { moveTask, handleActive, handleAdd, removeTask, editTask } = taskSlice.actions;

export default reducer;
