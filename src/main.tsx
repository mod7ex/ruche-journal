import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import React from "react";
import "~/app.css";
import App from "~/App";

import store from '~/store'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root')!)

root.render(
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);