import { createStore, combineReducers } from 'redux';
import reducers from './../reducers';

const rootReducer = combineReducers({
  ...reducers
});

export default function configureStore() {
  return createStore(
    rootReducer /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
