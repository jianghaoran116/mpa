import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from '../containers/dev-tools';

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
    compose(applyMiddleware(thunkMiddleware), DevTools.instrument()),
  );
  return store;
}
