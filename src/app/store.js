import {configureStore} from '@reduxjs/toolkit';
import toDoListReducer from '../components/toDoListSlice';

export default configureStore({
    reducer: {
        toDoList: toDoListReducer,
    },
});
