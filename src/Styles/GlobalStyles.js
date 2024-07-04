import theme from "./theme.js";

export const CustomGlobalCss = {
  "*, *::after, *::before": {
    boxSizing: "border-box",
    padding: "0",
    margin: "0",

    transition: "all 0.3s",
  },
  html: {
    fontSize: "62.5%",
  },
  body: {
    width: "100%",
    background: theme.palette.background.bg600,
  },
};
