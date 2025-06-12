import { Grid2 } from "@mui/material";
import { NavItem } from "./NavItem.tsx";

interface NavItemListProps {
  activeSection: string;
  markScrolling?: (scrolling: boolean) => void;
  onNavItemSelect?: (id: string) => void;
}

export function NavItemList({
  activeSection,
  markScrolling,
  onNavItemSelect,
}: NavItemListProps) {
  return (
    <Grid2>
      <nav>
        <Grid2 container direction="column">
          <NavItem
            title="About"
            href="#about"
            active={activeSection === "about"}
            markScrolling={markScrolling}
            onNavItemSelect={onNavItemSelect}
          />
          <NavItem
            title="Skills"
            href="#skills"
            active={activeSection === "skills"}
            markScrolling={markScrolling}
            onNavItemSelect={onNavItemSelect}
          />
          <NavItem
            title="Job History"
            href="#history"
            active={activeSection === "history"}
            markScrolling={markScrolling}
            onNavItemSelect={onNavItemSelect}
          />
          <NavItem
            title="Achievements"
            href="#achievements"
            active={activeSection === "achievements"}
            markScrolling={markScrolling}
            onNavItemSelect={onNavItemSelect}
          />
        </Grid2>
      </nav>
    </Grid2>
  );
}
