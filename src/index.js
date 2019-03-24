import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import Card from './Card.js';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './Robots.js';
import { searchRobots, requestRobots } from "./reducers";
import App from './App';

const logger = createLogger();
const rootReducer = combineReducers({
    searchRobots, 
    requestRobots
})
const store = createStore(rootReducer,
    applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
    <Provider  store={store}>
        <App />
    </Provider>
   ,
    document.getElementById('root'));
     
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
    
     
