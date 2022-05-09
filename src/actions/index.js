export const colorsSetting = (colors) => {
    return {
        type: 'SET_COLORS',
        payload: colors,
    }
}

export const setDefaultColors = () => {
    return {
        type: 'DEFAULT_COLORS',
    }
}

export const userThemesSetting = (themes) => {
    return {
        type: 'INIT_LOCALSTORAGE',
        payload: themes,
    }
}

export const changeThemeStyle = (themeStyle) => {
    return {
        type: 'CHANGE_THEMESTYLE',
        payload: themeStyle,
    }
}
