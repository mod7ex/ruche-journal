import { HashRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import React from "react";
import "~/app.css";
import App from "~/App";

import store from '~/store'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root')!)

root.render(
    <HashRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </HashRouter>
);