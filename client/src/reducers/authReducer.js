import {LOGIN_IN,LOGOUT} from '../constans/auth'

let userState;

if(window.localStorage.getItem('auth')){
  userState = JSON.parse(window.localStorage.getItem('auth'))
}else{
    userState={}
}

export const userReducer =(state=userState,action)=>{
    switch(action.type){
        case LOGIN_IN: 
        return{
            ...state,
            doktor:action.payload
        }
        case LOGOUT:
            return {
                ...state,
                doktor:action.payload
            }
        default: return state
    }
    
    
}