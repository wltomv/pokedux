import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import {
    applyMiddleware,
    compose,
    legacy_createStore as createStore,
} from "redux";
import { logger } from "./middlewares";

import "./index.css";

const composeEnhancers = compose(applyMiddleware(logger));

const store = createStore(pokemonsReducer, composeEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
