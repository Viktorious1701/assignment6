import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./app/App.jsx";
import store from "./app/store.js";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

async function enableMocking() {
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});
