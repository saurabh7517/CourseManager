import * as courseApi from '../../api/courseApi';
import * as actionTypes from './actionTypes';
import * as apiActions from "./apiStatusAction";
export function createCourse(course){
    return{
        type:actionTypes.CREATE_COURSE_SUCCESS,
        course:course
    }
}

export function updateCourse(course){
    return{
        type:actionTypes.UPDATE_COURSE_SUCCESS,
        course:course
    }
}

export function saveCourse(course){
    return function(dispatch){
        dispatch(apiActions.beginApiCallAction())
        return courseApi.saveCourse(course)
        .then((savedCourse) => {course.id === savedCourse.id ? dispatch(updateCourse(course)):dispatch(createCourse(course));

        }).catch((error) => {
            dispatch(apiActions.errorApiCallAction());
            console.log(error)});
    }
}
export function loadCoursesSuccess(courses){
    return {
        type:actionTypes.LOAD_COURSES_SUCCESS,
        courses:courses
    }
}


function deleteCourseFrontEnd(course){
    return {
        type:actionTypes.DELETE_COURSE,
        course:course
    }
}

export function deleteCourse(course){
    return function(dispatch){
        // dispatch(apiActions.beginApiCallAction());
        dispatch(deleteCourseFrontEnd(course));
        return courseApi.deleteCourse(course.id)        
        .catch((error)=> {
            // dispatch(apiActions.errorApiCallAction());
            console.log(error);
            throw error;
        });
    }

}

export function loadCourses(){
    return function(dispatch){
        dispatch(apiActions.beginApiCallAction());
        return courseApi.getCourses()
        .then((courses) => {dispatch(loadCoursesSuccess(courses))})
        .catch((error) => {
            dispatch(apiActions.errorApiCallAction());
            console.log(error)});
    }
}
