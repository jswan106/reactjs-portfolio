import { Grid2, Typography } from "@mui/material";
import { SkillsCategory } from "./SkillsCategory.tsx";

export function SkillsContainer() {
  return (
    <Grid2 container id="skills">
      {/*Maybe a cool enhancement might be to update skills to */}
      {/*have the layout as if it were a skill tree from a video*/}
      {/*game? Might be kind of cool?*/}
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
