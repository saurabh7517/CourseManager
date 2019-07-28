import * as types from '../actions/actionTypes';
import initialState from './initialState';
function courseReducer(state = initialState.courses, action) {

    let newCourseList = null;
    switch (action.type) {
        case types.CREATE_COURSE_SUCCESS:
            newCourseList = state.courses.push(action.course);
            return [...newCourseList];
        case types.LOAD_COURSES_SUCCESS:
            return [...action.courses];
        case types.SOFT_DELETE_COURSE:
            // let tempList = newCourseList.filter(tempCourse => tempCourse.id === action.course.id);
            return state.filter(tempCourse => tempCourse.id !== action.course.id);
        case types.ADD_BACK_COURSE:
            // state.push(action.course);
            return [...state,action.course];
        default:
            return state;

    }
}

export default courseReducer;