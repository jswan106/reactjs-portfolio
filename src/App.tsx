import "./App.css";
import { useEffect, useRef, useState } from "react";
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
import { BioSummary } from "./components/BioSummary.tsx";
import { SkillsContainer } from "./components/SkillsContainer.tsx";

function App() {
  const gradientTrackingBase = useRef<any>();
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    gradientTrackingBase.current.addEventListener("mousemove", (e: any) => {
      const x = e.clientX;
      const y = e.clientY;
      gradientTrackingBase.current.style.setProperty("--x", x + "px");
      gradientTrackingBase.current.style.setProperty("--y", y + "px");
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "about" },
        { id: "skills" },
        { id: "achievements" },
      ];
      const viewportHeight =
        scrollBoxRef.current?.clientHeight || window.innerHeight;
      const threshold = viewportHeight * 0.35; // 35% of the scrollable area
      const bottomOffset = 35;

      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const boxRect = scrollBoxRef.current?.getBoundingClientRect();
        if (!boxRect) continue;
        // Calculate top and bottom relative to the scrollable box
        const top = rect.top - boxRect.top;
        const bottom = rect.bottom - boxRect.top - bottomOffset;
        // If any part of the section is in the top 35% of the scroll area
        if (
          (top >= 0 && top <= threshold) ||
          (bottom >= 0 && bottom <= threshold) ||
          (top < 0 && bottom > threshold) // Section spans the threshold
        ) {
          setActiveSection(id);
          return;
        }
      }
    };

    const box = scrollBoxRef.current;
    if (box) {
      box.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Set initial
    }
    return () => {
      if (box) box.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el && scrollBoxRef.current) {
          const boxRect = scrollBoxRef.current.getBoundingClientRect();
          const elRect = el.getBoundingClientRect();
          // Calculate scroll position so the element aligns with the top of the scroll area
          const scrollTop =
            scrollBoxRef.current.scrollTop + (elRect.top - boxRect.top);
          scrollBoxRef.current.scrollTo({
            top: scrollTop,
            behavior: "smooth",
          });
        }
      }
    };

    // Scroll on mount if hash exists
    scrollToHash();

    // Listen for hash changes
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        ref={gradientTrackingBase}
        className="gradient-tracking-base"
        style={{ width: "100%" }}
      >
        <CssBaseline />
        <Box
          id="scroll-box"
          ref={scrollBoxRef}
          sx={{
            height: "100vh",
            zIndex: 2,
            width: "100%",
            overflowY: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ py: 3, height: "100vh", zIndex: -10 }}>
            <Grid2
              container
              size={12}
              justifyContent="space-between"
              sx={{ pt: 10 }}
              alignItems="flex-start"
            >
              <Grid2 container size={{ xs: 12, lg: 4.5 }}>
                <TitleContainer />
                <NavItemList activeSection={activeSection} />
                {/*Maybe a cool enhancement might be to update skills to */}
                {/*have the layout as if it were a skill tree from a video*/}
                {/*game? Might be kind of cool?*/}
              </Grid2>
              <Grid2 size={{ xs: 12, lg: 6.5 }}>
                <BioSummary />
                <SkillsContainer />
                <Grid2 size={12} sx={{ pt: 5 }} id="achievements">
                  <Grid2 size={12}>
                    <Typography
                      variant="h6"
                      color="secondary"
                      sx={{
                        pb: 0.5,
                        fontFamily: "Montserrat",
                        fontSize: "1.4rem",
                      }}
                    >
                      Achievements
                    </Typography>
                  </Grid2>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                  <Paper sx={{ p: 4 }}>
                    <Grid2 size={12}>
                      <Typography>Vice President of Engineering</Typography>
                    </Grid2>
                  </Paper>
                </Grid2>
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
