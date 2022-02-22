import { ACTIONS } from "../actionTypes";

const initialState ={
    token:{}
}

export const login = (state = initialState, action) =>{
    switch (action.type){
        case ACTIONS.LOGIN:
            return { ...state,token:action.payload }
        case ACTIONS.LOGOUT:
            return initialState
        default:
            return state
    }
}