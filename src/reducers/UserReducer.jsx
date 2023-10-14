import { SET_SELECTED_TAB } from "../actions";

export const UserReducer = (state, action) => {
    switch (action?.type) {
        case SET_SELECTED_TAB:
            return { ...state, selectedTab: action.payload }
        default:
            return state;
    }
}
