import { configureStore } from '@reduxjs/toolkit';
import colors from '../components/ColorPanel/colorPanelSlice';
import themes from '../components/ThemeSidebar/themeSidebarSlice';
import themeStyle from '../components/ThemeDesignSwitcher/themeDesignSwitcherSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {colors, themes, themeStyle},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;