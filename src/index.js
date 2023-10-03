import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SimpleReactLightbox from "simple-react-lightbox";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
