import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto', sans-serif",
    mono: "'Roboto', sans-serif",
  },
  fontSizes: {
    ...theme.fontSizes,
  },
  space: {
    ...theme.space,
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: "5px",
    md: "8px",
  },
  layerStyles: {
    base: {
      bg: "black.50",
      height: "100vh",
    },
  },

  colors: {
    white: {
      50: "#ffff",
      100: "#E1E1E6",
    },
    black: {
      50: "#121214",
      100: "#202024",
    },
    grey: {
      50: "#E1E1E6",
      100: "#A8A8B3",
      200: "#737380",
      300: "#323238",
    },
    purple: {
      50: "#8257E5",
      100: "#cebcf8",
      200: "#734BD",
      300: "#8257E5",
      400: "#734BD1",
      500: "#A32DDF",
      600: "#3f189b",
      700: "#2d116f",
      800: "#1b0944",
      900: "#0b011c",
    },
    green: {
      50: "#dcffed",
      100: "#aeffd3",
      200: "#04e168",
      300: "#4dfc9c",
      400: "#8CC84B",
      500: "#04D361",
      600: "#00af50",
      700: "#007d39",
      800: "#1C2A24",
      900: "#001b07",
    },
    blue: {
      50: "#2AC7E3",
    },
    red: {
      50: "#ffe7e7",
      100: "#f4c1c1",
      200: "#e69a9a",
      300: "#da7273",
      400: "#CE4A4A",
      500: "#b53131",
      600: "#8d2525",
      700: "#65191a",
      800: "#3f0d0e",
      900: "#1d0101",
    },
  },
});

export default customTheme;
