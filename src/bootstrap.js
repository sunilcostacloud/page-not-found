import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(<App />, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById("_page-not-found-dev-root");

    if (devRoot) {
        mount(devRoot);
    }
}

// We are running through container
// and we should export the mount function
export { mount };