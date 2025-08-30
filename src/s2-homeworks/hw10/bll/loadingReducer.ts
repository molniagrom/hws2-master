export type LoadingReducerType = {
    isLoading: boolean
}

const initState: LoadingReducerType = {
    isLoading: false,
}

type AllAction = LoadingActionType

export const loadingReducer = (state = initState, action: AllAction): LoadingReducerType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
            case 'CHANGE_LOADING':
                return {
                    ...state,
                    isLoading: action.isLoading,
                }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
