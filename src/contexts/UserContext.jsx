import { createContext, useMemo, useReducer } from "react";
import { UserReducer } from "../reducers/UserReducer";

const UserContext = createContext();

const initialValues = {
    selectedTab: ""
}

export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialValues)
    const contextValue = useMemo(() => ({ state, dispatch }), [state]); // Memoize the context value

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext