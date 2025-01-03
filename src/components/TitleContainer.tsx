import { Grid2, Typography } from "@mui/material";

export function TitleContainer() {
  return (
    <Grid2 size={12}>
      <Grid2 size={12}>
        <Typography
          variant="h3"
          color="secondary"
          sx={{ fontSize: 50, fontFamily: "MontserratSemiBold" }}
        >
          Jordan Swan
        </Typography>
      </Grid2>
      <Grid2 size={12} sx={{ pt: 1, pb: 2 }}>
        <Typography
          variant="h6"
          color="secondary"
          sx={{ fontFamily: "Montserrat" }}
        >
          Vice President of Engineering
        </Typography>
      </Grid2>
      <Grid2 size={12} sx={{ pt: 1, pb: 4 }}>
        <Typography color="text.secondary">
          I build reliable, scalable, efficient and magical applications.
        </Typography>
      </Grid2>
    </Grid2>
  );
}
