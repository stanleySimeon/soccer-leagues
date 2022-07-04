import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import LeaguesReducer from './reducer/reducer';

const rootReducer = combineReducers({
  leagues: LeaguesReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
