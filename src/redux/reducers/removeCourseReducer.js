import initialState from "./initialState";
import * as types from '../actions/actionTypes';
function removeCourseReducer(state=initialState.toRemove,action){

    switch(action.type){
        case types.ADD_TOREMOVE:
            return [...state,action.course];
        case types.REMOVE_COURSE_FROM_TOREMOVE:
            return state.filter(tempCourse => tempCourse.id !== action.course.id);
        default:
            return state;
    }
}

export default removeCourseReducer;
