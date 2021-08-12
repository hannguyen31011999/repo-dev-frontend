import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import xucXacReducer from './Reducers/GameXucXacReducer';
import gameOttReducer from './Reducers/GameOttReducer';
import moviesReducer from './Reducers/MoviesReducer';
import guestReducer from './Reducers/GuestReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    xucXacReducer,
    gameOttReducer,
    moviesReducer,
    guestReducer
});

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;