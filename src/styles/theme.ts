import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          // main: "#006666",
          // main: "#074959",
          main: "#046c75",
        },
        background: {
          default: "#f3f3f3",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#5ac1ca",
        },
        secondary: {
          main: "#cde9eb",
        },
        text: {
          secondary: "#8aa2a8",
          disabled: "#576e75",
        },
        background: {
          // default: "#122424",
          paper: "rgba(0, 39, 51,0.05)",
          default: "#002129",
        },
        grey: {
          // 600: "#43545b",
        },
      },
    },
  },
  typography: {
    fontFamily: `"MontserratLight", "Roboto", "Helvetica", sans-serif`,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          zIndex: 10,
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "rgba(0, 39, 51,0.8)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          zIndex: 20,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus, &:focus-visible": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});
