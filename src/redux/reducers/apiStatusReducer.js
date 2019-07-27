import initialState from "./initialState";
import * as types from "../actions/actionTypes";

function processActionTypeMessage(actionTypeMessage){
    let stringArray = actionTypeMessage.split("_");
    return stringArray[stringArray.length-1] === "SUCCESS" ? true :false;
}

export default function apiStatusChangeReducer(state=initialState.apiStatusCount,action){
    let newState = state;
    if(action.type === types.BEGIN_API_CALL){
        return newState + 1;
    }else if(processActionTypeMessage(action.type) || action.type === types.ERROR_API_CALL){
        return newState - 1;
    } 

    return newState;
}