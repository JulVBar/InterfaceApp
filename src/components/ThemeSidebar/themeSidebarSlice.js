import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTheme: '',
    userThemes: [],
}

const themeSidebarSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        setActiveTheme: (state, action) => {
            state.activeTheme = action.payload;
        },
        userThemesSetting: (state, action) => {
            state.userThemes = action.payload;
        },
    },
});

const {actions, reducer} = themeSidebarSlice;

export default reducer;

export const {
    setActiveTheme,
    userThemesSetting,
} = actions;