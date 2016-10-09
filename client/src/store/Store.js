import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { rootSaga } from '../sagas';
import createSagaMiddleware from 'redux-saga';
import { logger } from '../middleware';
import rootReducer from '../reducers';

function configure() {
  const sagaMiddleware = createSagaMiddleware();
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    logger,
    sagaMiddleware
  )(create);

  const store = createStoreWithMiddleware(
    rootReducer,
    autoRehydrate(),
  );

  persistStore(store);
  sagaMiddleware.run(rootSaga);

  return store;
}

const store = configure();

export default store;
