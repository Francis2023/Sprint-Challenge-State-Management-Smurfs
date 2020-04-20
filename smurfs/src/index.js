import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reducer from "./reducers/reducer"
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux"
import {combineForms, initialFieldState} from "react-redux-form"

const store = createStore(reducer,applyMiddleware(thunk,logger),combineForms({smurfs: initialFieldState,})) ;

ReactDOM.render(
<Provider store={store} >
<App />
</Provider>
, document.getElementById("root"));