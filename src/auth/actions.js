import {SIGNUP_ERROR , SIGNUP_SUCCESS ,SIGNUP_LOADING, LOGIN_ERROR ,LOGIN_SUCCESS , LOGIN_LOADING} from './actionTypes';

//--------------Signup --------------- 
export const signupLoading = () =>{
    return {
        type : SIGNUP_LOADING
    };
}

export const signupSuccess = () =>{
    return {
        type : SIGNUP_SUCCESS
    };
}

export const signupError = () =>{
    return{
        type : SIGNUP_ERROR
    }
}

// -------------Login----------------
export const loginLoading = () =>{
    return {
        type : LOGIN_LOADING
    };
}

export const loginSuccess = (payload) =>{
    return {
        type : LOGIN_SUCCESS,
        payload
    };
}

export const loginError = () =>{
    return{
        type : LOGIN_ERROR
    }
}