import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import getSagas, { createDynamicSaga } from '../sagas';
import createLogger from './logger';
import { composeWithDevTools } from 'redux-devtools-extension';

let DEBUG = process.env.NODE_ENV !== 'production';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export default function configureStore(initialState) {
  const middleware = [sagaMiddleware, DEBUG && logger].filter(Boolean);

  let composeEnhancers = compose;
  if (DEBUG) {
    composeEnhancers = composeWithDevTools;
  }

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(createDynamicSaga('SET_SAGAS', getSagas()));

  return store;
}
