// store.js
import { createStore, combineReducers } from 'redux';
import favoritesReducer from '../reducer/favoritesReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer);

export default store;
