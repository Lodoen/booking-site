import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Theme from "./styles/theme.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
);
