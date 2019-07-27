import * as types from '../actions/actionTypes';
import initialState from './initialState';
function courseReducer(state = initialState.courses, action) {

    let newCourseList = state.courses;
    switch (action.type) {
        case types.CREATE_COURSE_SUCCESS:
            newCourseList.push(action.course);
            return [...newCourseList];
        case types.LOAD_COURSES_SUCCESS:
            return [...action.courses];
        case types.DELETE_COURSE:
            // let tempList = newCourseList.filter(tempCourse => tempCourse.id === action.course.id);
            return state.filter(tempCourse => tempCourse.id !== action.course.id);
        default: return state;

    }
}

export default courseReducer;