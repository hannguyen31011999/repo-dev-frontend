import { createStore, combineReducers } from 'redux';
import xucXacReducer from './Reducers/GameXucXacReducer';

const rootReducer = combineReducers({
    xucXacReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;