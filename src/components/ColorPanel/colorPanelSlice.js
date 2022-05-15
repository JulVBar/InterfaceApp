import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors: {
        layout: '#DBDBDB',
        main: '#E5E5E5',
        disabled: '#C8C8CE',
        primary: '#FF9D4D',
        secondary: '#FF4C56',
        text: '#0F0E0E'
    },
}

const colorPanelSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        colorsSetting: (state, action) => {
            state.colors = action.payload;
        },
        setDefaultColors: state => {state.colors = initialState.colors},
    },
});

const {actions, reducer} = colorPanelSlice;

export default reducer;

export const {
    colorsSetting,
    setDefaultColors,
} = actions;