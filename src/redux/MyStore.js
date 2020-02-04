import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './MyReducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mystore = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default mystore;