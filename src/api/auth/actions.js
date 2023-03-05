import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_FAILURE, LOGOUT_SUCCESS } from "./actionTypes"
import data from "../data.json"

export const loginRequest = (payload) => ({
    type: LOGIN_REQUEST,
    payload
})

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload) => ({
    type: LOGIN_FAILURE,
    payload
})

export const logoutRequest = (payload) => ({
    type: LOGOUT_REQUEST,
    payload
})

export const logoutSuccess = (payload) => ({
    type: LOGOUT_SUCCESS,
    payload
})

export const logoutFailure = (payload) => ({
    type: LOGOUT_FAILURE,
    payload
})

export const authorizeLogin = (payload) => dispatch => {
    dispatch(loginRequest())
    let current = data.find(item => item.username === payload.username)
    if (current.password === payload.password) {
        return dispatch(loginSuccess({ userData: current }))
    }
    else{
        return dispatch(loginFailure({ message: "Error" }))
    }
}

export const logoutUser = () => dispatch => {
    dispatch(logoutSuccess())
}