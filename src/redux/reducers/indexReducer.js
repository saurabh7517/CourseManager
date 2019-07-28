import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import apiStatusChangeReducer from "./apiStatusReducer";
import removeCourseReducer from './removeCourseReducer';
const rootReducer = combineReducers(
    {
        courseReducer:courseReducer,
        authorReducer:authorReducer,
        apiStatusChangeReducer:apiStatusChangeReducer,
        removeCourseReducer:removeCourseReducer
    }
);

export default rootReducer;