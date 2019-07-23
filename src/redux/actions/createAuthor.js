import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';
import * as actionApi from "./apiStatusAction";
export function loadAuthorSuccess(authors){
    return{
        type:types.LOAD_AUTHORS_SUCCESS,
        authors:authors
    }
}



export function loadAuthors(){
    return (dispatch) => {
        dispatch(actionApi.beginApiCallAction());
        return authorApi.getAuthors()
        .then((authors) => dispatch(loadAuthorSuccess(authors)))
        .catch((error)=> {
            dispatch(actionApi.errorApiCallAction());
            console.log(error)});
    }
}

