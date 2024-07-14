import { configureStore } from '@reduxjs/toolkit';
import taskSliceReducer from './taskSlice';

// Конфигурация store с подключением reducer
const store = configureStore({
    reducer: {
        tasks: taskSliceReducer,
    },
});

// Типизация состояния store
export type RootState = ReturnType<typeof store.getState>;

// Экспорт store по умолчанию
export default store;
