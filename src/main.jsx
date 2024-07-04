import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { CustomGlobalCss } from "./Styles/GlobalStyles.js";
import theme from "./Styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={CustomGlobalCss} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
