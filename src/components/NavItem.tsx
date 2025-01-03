import { Button, Typography } from "@mui/material";

interface NavItemProps {
  title: string;
  href: string;
  active?: boolean;
}

export function NavItem(props: NavItemProps) {
  return (
    <Button
      color="inherit"
      disableTouchRipple
      disableFocusRipple
      sx={{
        px: 0,
        py: 0.2,
        "&:hover": {
          backgroundColor: "inherit",
          borderColor: "inherit",
          boxShadow: "none",
        },
      }}
    >
      <Typography
        component="a"
        className="navItemGroup"
        href={props.href}
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          py: 1,
          lineHeight: "26px",
          width: "100%",
          textTransform: "uppercase",
        }}
      >
        <Typography
          component="span"
          sx={{
            backgroundColor: props.active ? "secondary.main" : "text.disabled",
            width: props.active ? "4rem" : "2rem",
            height: "1px",
            mr: 2,
            transitionDuration: "0.2s",
            transitionProperty: "all",
            ".navItemGroup:hover &": {
              width: "4rem",
              backgroundColor: "secondary.main",
            },
          }}
        />
        <Typography
          component="span"
          sx={{
            fontSize: 14,
            color: props.active ? "secondary.main" : "text.disabled",
            fontFamily: "MontserratSemiBold",
            transitionDuration: "0.2s",
            transitionProperty: "all",
            ".navItemGroup:hover &": {
              color: "secondary.main",
            },
          }}
        >
          {props.title}
        </Typography>
      </Typography>
    </Button>
  );
}
