import * as actionTypes from './actionTypes';

export function beginApiCallAction(){
    return {
        type:actionTypes.BEGIN_API_CALL
    }
}

export function errorApiCallAction(){
    return{
        type:actionTypes.ERROR_API_CALL
    }
}
