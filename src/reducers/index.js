
const initialState = {
    colors: {
        layout: '#E5E5E5',
        main: '#FFFFFF',
        disabled: '#C8C8CE',
        primary: '#FF9D4D',
        secondary: '#FF4C56',
        text: '#0F0E0E'
    },
    activeTheme: '',
    userThemes: [],
    themeStyle: 'flat',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COLORS':
            return {
                ...state,
                colors: action.payload,
            }
        case 'DEFAULT_COLORS':
                return {
                    ...state,
                    colors: initialState.colors,
                }
        case 'INIT_LOCALSTORAGE':
            return {
                ...state,
                userThemes: action.payload,
            }
        case 'ACTIVE_THEME':
            return {
                ...state,
                activeTheme: action.payload,
            }
        case 'CHANGE_THEMESTYLE':
            return {
                ...state,
                themeStyle: action.payload,
            }
        default: return state
    }
}


export default reducer;