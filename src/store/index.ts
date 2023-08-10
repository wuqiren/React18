import { legacy_createStore,combineReducers, compose,applyMiddleware } from 'redux'
import numReducer from './NumStatus/reducer'
import reduxThunk from 'redux-thunk'
const reducers = combineReducers({ numReducer })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store =  legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))
export default store


