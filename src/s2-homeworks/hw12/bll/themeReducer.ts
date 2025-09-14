const initState = {
    themeId: 1,
}

export type InitState = {
    themeId: number
}

export const themeReducer = (state = initState, action: ThemeAction): InitState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id,
            }
        default:
            return state
    }
}

type ThemeAction = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const)
