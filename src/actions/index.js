export const layoutColorSetting = (color) => {
    return {
        type: 'LAYOUT_COLOR',
        payload: color,
    }
}

export const primaryColorSetting = (color) => {
    return {
        type: 'PRIMARY_COLOR',
        payload: color,
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
