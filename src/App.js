import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import store from "./redux/store.js";
import Home from "./pages/Home/index.jsx";
import theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
