import {createStore,compose,applyMiddleware} from 'redux';
import rootReducer from './reducers/indexReducer';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//Adding support for react dev tools
    return createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(thunk,reduxImmutableStateInvariant())));
}

export default configureStore;