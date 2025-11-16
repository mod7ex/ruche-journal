import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "~/app.css";
import App from "~/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);