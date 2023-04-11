import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    height: 80,
    top: 0,
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(10px)",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      padding: 10,
    },
  },
  text: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "130%",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
}));
