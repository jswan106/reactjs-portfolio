import { Grid2 } from "@mui/material";
import { NavItem } from "./NavItem.tsx";

interface NavItemListProps {
  activeSection: string;
}

export function NavItemList({ activeSection }: NavItemListProps) {
  return (
    <Grid2>
      <nav>
        <Grid2 container direction="column">
          <NavItem
            title="About"
            href="#about"
            active={activeSection === "about"}
          />
          <NavItem
            title="Skills"
            href="#skills"
            active={activeSection === "skills"}
          />
          <NavItem
            title="Achievements"
            href="#achievements"
            active={activeSection === "achievements"}
          />
        </Grid2>
      </nav>
    </Grid2>
  );
}
