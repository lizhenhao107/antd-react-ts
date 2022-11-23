import { createSlice } from '@reduxjs/toolkit';
export interface AppState {
    text: String;
}

const initialStateApp: AppState = {
    text: 'Hello World',
};


const app = createSlice({
    name: 'App',
    initialState: initialStateApp,
    reducers: {
    },
    extraReducers: (builder) => {
    }
})

export const App = app.reducer