import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./ducks/counter";
import dataReducer from "./ducks/data";
import flagReducer from "./ducks/flag"
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  counter: counterReducer,
  data: dataReducer,
  flag:flagReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
