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




function addToRemoveAction(course){
    return{
        type:actionTypes.ADD_TOREMOVE,
        course:course
    }
}

export function addToRemove(course){
    return function(dispatch){
        dispatch(addToRemoveAction(course));
    }
}

function removeFromToRemoveAction(course){
    return{
        type:actionTypes.REMOVE_COURSE_FROM_TOREMOVE,
        course:course
    }
}

export function removeFromToRemove(course){
    return function(dispatch){
        dispatch(removeFromToRemoveAction(course));
    }
}

function softDeleteAction(course){
    return {
        type:actionTypes.SOFT_DELETE_COURSE,
        course:course
    }
}

export function softDeleteCourse(course){
    return function(dispatch){
        // dispatch(apiActions.beginApiCallAction());
        dispatch(softDeleteAction(course));
    }
}

function hardDeleteAction(course){
    return{
        type:actionTypes.HARD_DELETE_COURSE,
        course:course
    }
}

export function hardDeleteCourse(course){
    return function(dispatch){        
        return courseApi.deleteCourse(course.id)                
        .catch((error)=> {
            // dispatch(apiActions.errorApiCallAction());
            console.log(error);
            throw error;
        });
    }
}

function addDeletedCourse(course){
    return{
        type:actionTypes.ADD_BACK_COURSE,
        course:course     
    }
}

export function addBackDeletedCourse(course){
    return function(dispatch){
        dispatch(addDeletedCourse(course));
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
