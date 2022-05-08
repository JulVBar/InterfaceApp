
const initialState = {
    layoutColor: '#ffffff',
    primaryColor: '#ffffff',
    userThemes: [],
    themeStyle: 'white',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LAYOUT_COLOR':
            return {
                ...state,
                layoutColor: action.payload,
            }
        case 'PRIMARY_COLOR':
            return {
                ...state,
                primaryColor: action.payload,
            }
        case 'INIT_LOCALSTORAGE':
            return {
                ...state,
                userThemes: action.payload,
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