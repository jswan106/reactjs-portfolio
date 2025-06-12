import { Grid2, Paper, Typography } from "@mui/material";

export function JobHistoryContainer() {
  return (
    <Grid2 size={12} id="history">
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
          Job History
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
    </Grid2>
  );
}
