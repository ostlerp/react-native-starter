import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export let configureStore = (initialState) => {
  let logger = createLogger();
  let finalCreateStore = applyMiddleware(thunkMiddleware, logger)(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
