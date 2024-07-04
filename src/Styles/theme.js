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
            paper: "#333740",
            bg300: "#3D5679",
            bg400: "#324763",
            bg500: "#27374E",
            bg600: "#1C2838",
            bg700: "#111822",
        },
        primary: {
            main: "#745850",
            light: "#F3B699",
            dark: "#4F362A",
        },
        secondary: {
            main: "#3986DF",
            light: "#72A9E8",
            dark: "#2171CB",
        },
        text: {
            primary: "rgba(255, 255, 255, 0.92)",
            secondary: "#92A9C8",
        },
    },
    borders: {
        primary: `1px solid rgba(255, 255, 255, 0.16)`,
        secondary: `1px solid rgba(51, 55, 64, 100)`,
        primaryLinkUnderline: "underline 2px rgba(255, 255, 255, 0.92)",
    },
    spacing: (factor) => `${factor * 0.25}rem`,
    shape: {
        borderRadius: 12.5,
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
