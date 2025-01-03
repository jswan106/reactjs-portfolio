import "./App.css";
import { useEffect, useRef } from "react";
import {
  Box,
  Container,
  CssBaseline,
  Grid2,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { theme } from "./styles/theme.ts";
import { NavItemList } from "./components/NavItemList.tsx";
import { TitleContainer } from "./components/TitleContainer.tsx";

function App() {
  const gradientTrackingBase = useRef<any>();

  useEffect(() => {
    gradientTrackingBase.current.addEventListener("mousemove", (e: any) => {
      const x = e.clientX;
      const y = e.clientY;
      gradientTrackingBase.current.style.setProperty("--x", x + "px");
      gradientTrackingBase.current.style.setProperty("--y", y + "px");
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        ref={gradientTrackingBase}
        className="gradient-tracking-base"
        style={{ width: "100%" }}
      >
        <CssBaseline />
        <Box sx={{ height: "100vh", zIndex: -10, width: "100%" }}>
          <Container maxWidth="lg" sx={{ py: 3, height: "100vh", zIndex: -10 }}>
            <Grid2
              container
              size={12}
              justifyContent="space-between"
              sx={{ pt: 10 }}
            >
              <Grid2 container size={4.5}>
                <TitleContainer />
                <NavItemList />
              </Grid2>
              <Grid2 size={6}>
                <Typography color="text.secondary">
                  I'm a software engineer passionate about creating scalable,
                  resilient, and beautiful applications that can stand the test
                  of time.
                </Typography>
                <Paper sx={{ p: 4, mt: 4 }}>
                  <Grid2 size={12}>
                    <Typography>Vice President of Engineering</Typography>
                  </Grid2>
                </Paper>
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
