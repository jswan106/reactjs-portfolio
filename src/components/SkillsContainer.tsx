import { Grid2, Typography } from "@mui/material";
import { SkillsCategory } from "./SkillsCategory.tsx";

export function SkillsContainer() {
  return (
    <Grid2 container sx={{ pt: 2 }} id="skills">
      <Typography
        variant="h6"
        color="secondary"
        sx={{ pb: 0.5, fontFamily: "Montserrat", fontSize: "1.4rem" }}
      >
        Skills
      </Typography>

      <Grid2 container spacing={1}>
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
        <SkillsCategory size={12} />
      </Grid2>
    </Grid2>
  );
}
