import "./App.css";
import { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  CssBaseline,
  Grid2,
  Paper,
  ThemeProvider,
} from "@mui/material";
import { theme } from "./styles/theme.ts";
import { NavItemList } from "./components/NavItemList.tsx";
import { TitleContainer } from "./components/TitleContainer.tsx";
import { BioSummary } from "./components/BioSummary.tsx";
import { SkillsContainer } from "./components/SkillsContainer.tsx";
import { AchievementsContainer } from "./components/AchievementsContainer.tsx";
import { JobHistoryContainer } from "./components/JobHistoryContainer.tsx";
import bgImgUrl from "./assets/background-img.png";

function App() {
  const gradientTrackingBase = useRef<any>();
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("about");
  const [navScrollInProgress, setNavScrollInProgress] = useState(false);

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
        { id: "history" },
        { id: "achievements" },
      ];
      const viewportHeight =
        scrollBoxRef.current?.clientHeight || window.innerHeight;
      const threshold = viewportHeight * 0.35;
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
      handleScroll();
    }
    return () => {
      if (box) box.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "about" },
        { id: "skills" },
        { id: "history" },
        { id: "achievements" },
      ];
      const box = scrollBoxRef.current;
      if (!box) return;
      const hashId = window.location.hash?.replace("#", "") ?? undefined;

      let found = false;
      for (const { id } of sections) {
        found = isAtTopOfScreen(id);
        if (found) break;
      }

      // If not found and scrolled to bottom, set last section as active
      if (isScrolledToBottom(box)) {
        let newActiveSection = sections[sections.length - 1].id;

        if (window.location.hash && found == true) {
          newActiveSection = hashId;
        }

        if (found && navScrollInProgress) {
          setNavScrollInProgress(false);
        }

        setActiveSection(newActiveSection);
      }
    };

    const box = scrollBoxRef.current;
    if (box) {
      box.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }
    return () => {
      if (box) box.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navScrollInProgress === true) {
      setTimeout(() => setNavScrollInProgress(false), 750);
    }

    return () => {};
  }, [navScrollInProgress]);

  useEffect(() => {
    const hashId = window.location.hash?.replace("#", "") ?? undefined;
    const present = isAtTopOfScreen(hashId);
    if (hashId && !present && navScrollInProgress === false) {
      removeHash();
    }
  }, [activeSection, navScrollInProgress]);

  const handleNavItemSelect = (id: string) => {
    setActiveSection(id);
    setNavScrollInProgress(true);
  };

  function isScrolledToBottom(box: HTMLElement) {
    // Allow a small threshold for floating point errors
    return box.scrollHeight - box.scrollTop - box.clientHeight - 15 < 2;
  }

  function removeHash() {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }

  function isAtTopOfScreen(id: string) {
    const box = scrollBoxRef.current;
    if (!box) return false;
    const el = document.getElementById(id);
    if (!el) return false;

    const viewportHeight = box.clientHeight || window.innerHeight;
    const threshold = viewportHeight * 0.35;
    const bottomOffset = 35;

    const rect = el.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();
    if (!boxRect) return false;
    const top = rect.top - boxRect.top;
    const bottom = rect.bottom - boxRect.top - bottomOffset;
    if (
      (top >= 0 && top <= threshold) ||
      (bottom >= 0 && bottom <= threshold) ||
      (top < 0 && bottom > threshold)
    ) {
      return true;
    }
    return false;
  }

  return (
    <ThemeProvider theme={theme}>
      <div
        ref={gradientTrackingBase}
        className="gradient-tracking-base"
        style={{ width: "100%" }}
      >
        <CssBaseline />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bgImgUrl})`,
            opacity: 0.04,
            // zIndex: 1,
            pointerEvents: "none",
          }}
        />
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
              <Grid2
                container
                size={{ xs: 12, lg: 3 }}
                sx={{ position: "absolute", top: 70 }}
              >
                <TitleContainer />
                <NavItemList
                  activeSection={activeSection}
                  markScrolling={setNavScrollInProgress}
                  onNavItemSelect={handleNavItemSelect}
                />
              </Grid2>
              <Grid2
                container
                size={{ xs: 12, lg: 4.5 }}
                sx={{ visibility: "hidden" }}
              >
                <TitleContainer />
              </Grid2>
              <Grid2
                container
                spacing={5}
                size={{ xs: 12, lg: 6.5 }}
                sx={{ pb: 6 }}
              >
                <BioSummary />
                <SkillsContainer />
                <JobHistoryContainer />
                <AchievementsContainer />
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
