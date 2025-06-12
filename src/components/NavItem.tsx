import { Button, Typography } from "@mui/material";

interface NavItemProps {
  title: string;
  href: string;
  active?: boolean;
}

export function NavItem(props: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = props.href.replace("#", "");
    const el = document.getElementById(id);
    const scrollBox = document.getElementById("scroll-box");
    const scrollOffset = 30;

    if (el && scrollBox) {
      const boxRect = scrollBox.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const scrollTop =
        (scrollBox as HTMLElement).scrollTop + (elRect.top - boxRect.top);
      (scrollBox as HTMLElement).scrollTo({
        top: scrollTop - scrollOffset,
        behavior: "smooth",
      });
      // Update the hash in the URL without jumping
      window.history.replaceState(null, "", props.href);
    } else {
      console.log("Couldn't find scrollbox and/or element", { el, scrollBox });
    }
  };

  return (
    <Button
      color="inherit"
      disableTouchRipple
      disableFocusRipple
      onClick={handleClick}
      sx={{
        px: 0,
        py: 0.2,
        "&:hover": {
          backgroundColor: "inherit",
          borderColor: "inherit",
          boxShadow: "none",
        },
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography
        className="navItemGroup"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          py: 1,
          lineHeight: "26px",
          width: "100%",
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
