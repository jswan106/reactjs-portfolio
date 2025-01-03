import { Grid2 } from "@mui/material";
import { NavItem } from "./NavItem.tsx";

export function NavItemList() {
  return (
    <nav style={{ display: "block", width: "max-content" }}>
      <Grid2 container direction="column">
        <NavItem title="About" href="#about" active />
        <NavItem title="Skills" href="#skills" />
        <NavItem title="Achievements" href="#achievements" />
      </Grid2>
    </nav>
  );
}
