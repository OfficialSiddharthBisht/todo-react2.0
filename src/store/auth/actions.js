import {SIGNUP_ERROR , SIGNUP_SUCCESS ,SIGNUP_LOADING, LOGIN_ERROR ,LOGIN_SUCCESS , LOGIN_LOADING, LOGOUT, FEED_USERDETAILS, FEED_USERDETAILS_ERROR} from './actionTypes';

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

export const logout = () =>{
    return{
        type : LOGOUT
    }
}
export const feedUserDetails = (payload) =>{
    return{
        type: FEED_USERDETAILS,
        payload
    }
}

export const feedUserDetailsError = () =>{
    return{
        type : FEED_USERDETAILS_ERROR
    }
}