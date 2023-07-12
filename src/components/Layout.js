import React from "react";

import { Outlet } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9", // Adjust primary color
    },
    secondary: {
      main: "#f48fb1", // Adjust secondary color
    },
    background: {
      default: "#303030", // Adjust default background color
      paper: "#424242", // Adjust paper/background color for components
    },
    text: {
      primary: "#ffffff", // Adjust primary text color
      secondary: "#bdbdbd", // Adjust secondary text color
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#424242", // Adjust paper/background color for components
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff", // White text color
        },
      },
    },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
