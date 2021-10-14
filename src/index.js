import React from "react";
import ReactDOM from "react-dom";

import UnitProvider from "./contexts/unit";
import App from "./App";
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <UnitProvider>
    <App />

    <GlobalStyle />
  </UnitProvider>,
  document.getElementById("root")
);
