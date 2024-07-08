import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    error: {
      main: "#C53030",
      light: "#FEB2B2",
    },
    whiteAlpha: {
      Alpha_50: "rgba(255, 255, 255, 0.04)",
      Alpha_100: "rgba(255, 255, 255, 0.06)",
      Alpha_200: "rgba(255, 255, 255, 0.08)",
      Alpha_300: "rgba(255, 255, 255, 0.16)",
      Alpha_400: "rgba(255, 255, 255, 0.24)",
      Alpha_500: "rgba(255, 255, 255, 0.36)",
      Alpha_600: "rgba(255, 255, 255, 0.48)",
      Alpha_700: "rgba(255, 255, 255, 0.64)",
      Alpha_800: "rgba(255, 255, 255, 0.80)",
      Alpha_900: "rgba(255, 255, 255, 0.92)",
    },
    background: {
      paper: "#292C35",
      bg300: "#505466",
      bg400: "#424554",
      bg500: "#333641",
      bg600: "#25272F",
      bg700: "#17181D",
    },
    primary: {
      main: "#E09145",
      light: "#FCD9B8",
      dark: "#B2651E",
    },
    secondary: {
      main: "#AC68EA",
      light: "#BD87EF",
      dark: "#8727E2",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.92)",
      secondary: "#BD87EF",
    },
  },
  borders: {
    primary: `1px solid rgba(255, 255, 255, 0.16)`,
    secondary: `1px solid #B2651E`,
    primaryLinkUnderline: "underline 2px rgba(255, 255, 255, 0.92)",
  },
  spacing: (factor) => `${factor * 0.25}rem`,
  shape: {
    borderRadius: "12.5px",
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
      fontWeight: 600,
    },
    subText: {
      fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
      fontSize: "1rem",
      fontWeight: 600,

      color: "rgba(255, 255, 255, 0.92)",
    },
    fontWeightSemiBold: 600,
  },
});

export default theme;
