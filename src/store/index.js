import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import reducers from "./reducers";
import rootSaga from './reducers/rootSaga'

const persistConfig = {
    key: 'geniRoot',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const storeEnhancers = [middlewareEnhancer];

const composedEnhancer = compose(...storeEnhancers);

const store = createStore(
    persistedReducer,
    composedEnhancer
);

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor };