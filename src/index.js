import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import combinedReducers from "./domain/layout/combinedReducers";

import BaseLayout from "./domain/layout/baseLayout";
import CharacterDetails from "./domain/characterDetails/characterDetails";
import "./index.css";

const createStoreWithMiddlware = applyMiddleware(ReduxPromise)(createStore);

const domNode = document.getElementById("root");

const provider = (
	<Provider store={createStoreWithMiddlware(combinedReducers)}>
		<BrowserRouter>
			<div className="root">
				<Switch>
					<Route exact path="/" component={BaseLayout} />
					<Route path="/character/:id" component={CharacterDetails} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(provider, domNode);
