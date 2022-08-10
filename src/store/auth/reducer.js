import {SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS ,LOGIN_ERROR,LOGIN_LOADING,LOGIN_SUCCESS, LOGOUT} from './actionTypes';

const initialState ={
    loading : false,
    error : false,
    token : null,
    message : ""
} 

export const reducer = (state = initialState , {type , payload}) =>{
    switch (type) {
        case SIGNUP_LOADING:
            return {
                ...state,
                loading :true
            }
        case SIGNUP_SUCCESS :
            return{
                ...state,
                loading : false,
                error : false
            }  
        case SIGNUP_ERROR :
            return{
                ...state,
                loading : false,
                error : true
            } 
            case LOGIN_LOADING:
                return {
                    ...state,
                    loading :true
                }
            case LOGIN_SUCCESS :
                return{
                    ...state,
                    loading : false,
                    error : false,
                    token : payload
                }  
            case LOGIN_ERROR :
                return{
                    ...state,
                    loading : false,
                    error : true
                } 
            case LOGOUT : 
                return{
                    ...initialState,
                    
                }
        default:
            return state;
    }
}