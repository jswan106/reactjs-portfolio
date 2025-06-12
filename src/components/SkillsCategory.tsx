import { Grid2, GridSize, Paper, Typography } from "@mui/material";

interface SkillsCategoryProps {
  size?: GridSize | undefined;
}

export function SkillsCategory(props: SkillsCategoryProps) {
  return (
    <Grid2 size={props.size}>
      <Paper elevation={1} sx={{ px: 1, py: 1.5 }}>
        <Grid2 container columnSpacing={4}>
          <Grid2>
            <Typography component="span">ICON</Typography>
          </Grid2>
          <Grid2 size="grow">
            <Typography>Something else</Typography>
          </Grid2>
        </Grid2>
      </Paper>
    </Grid2>
  );
}
