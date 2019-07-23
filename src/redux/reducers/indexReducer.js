import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import apiStatusChangeReducer from "./apiStatusReducer";
const rootReducer = combineReducers(
    {
        courseReducer:courseReducer,
        authorReducer:authorReducer,
        apiStatusChangeReducer:apiStatusChangeReducer
    }
);

export default rootReducer;