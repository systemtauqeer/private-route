import React, { createContext, useContext, useEffect, useState, useReducer } from 'react';

const AuthContext = createContext()
const initState = { isAuth: false, user: {} }

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_LOGGED_IN':
            return { isAuth: true, user: payload.user };
        case 'SET_LOGGED_OUT':
            return initState;
        default:
            return state
    }
}
export default function AuthContextProvider(props) {

    const [isAppLoading, setIsAppLoading] = useState(true);
    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            dispatch({ type: 'SET_LOGGED_IN', payload: { user } })
        }
        setTimeout(() => {
            setIsAppLoading(false)
        }, 2000)
    }, [])

    return (
        <AuthContext.Provider value={{ isAppLoading, ...state, dispatch }}>
            {props.children}
        </AuthContext.Provider>


    )
}
export const useAuthContext = () => useContext(AuthContext);

