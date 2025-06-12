import { Grid2, Typography } from "@mui/material";

export function BioSummary() {
  const sx = {
    pb: 2,
    lineHeight: 1.6,
    letterSpacing: 0.45,
    "& em": {
      color: "secondary.main",
      fontFamily: "MontserratSemiBold",
    },
  };
  return (
    <Grid2 id="about">
      <Typography color="text.secondary" sx={sx}>
        I'm a software engineer with a deep passion for crafting intuitive,
        visually appealing, and highly performant applications. I am driven by
        the challenge of transforming complex requirements into elegant,
        impactful solutions.
      </Typography>
      <Typography color="text.secondary" sx={sx}>
        Previously, I've had the opportunity to work in a variety of different
        disciplines across IT and Software Development, including:{" "}
        <em>DevOps</em>, <em>Systems Administration</em>,{" "}
        <em>Network Operations</em>, and <em>Cloud Engineering</em>.
        {/*Because of this, I am able to see the whole picture when*/}
        {/*building applications, which allows me to build more scalable*/}
        {/*applications.*/}
      </Typography>
      <Typography color="text.secondary" sx={sx}>
        My favorite thing about software engineering is that it feels like a
        puzzle, and I enjoy seeing all of the pieces come together. I'm
        constantly in the pursuit of knowledge and growth.
      </Typography>
      <Typography color="text.secondary" sx={{ ...sx, pb: undefined }}>
        In my free time, I'm usually hanging out with my wife, enhancing my{" "}
        <em>Stardew Valley farm</em>, savoring the pain from my most recent{" "}
        <em>Dota 2</em> match, or trying (and failing) to win a game of{" "}
        <em>tug-of-war</em> with my puppy.
      </Typography>
    </Grid2>
  );
}
