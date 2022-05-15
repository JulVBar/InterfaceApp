import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themeStyle: 'flat',
}

const themeDesignSwitcherSlice = createSlice({
    name: 'themeStyle',
    initialState,
    reducers: {
        changeThemeStyle: (state, action) => {
            state.themeStyle = action.payload;
        },
    },
});

const {actions, reducer} = themeDesignSwitcherSlice;

export default reducer;

export const {
    changeThemeStyle,
} = actions;