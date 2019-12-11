import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

function getDefaultState(initialState) {
  return global.appData || initialState || {};
}

const reducer = combineReducers({
  ...rootReducer,
});

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    getDefaultState(initialState),
    applyMiddleware(thunkMiddleware),
  );
  return store;
}
