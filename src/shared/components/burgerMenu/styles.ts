import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    cursor: "pointer",
    marginRight: 100,
    [theme.breakpoints.down("md")]: {
      marginRight: 20,
    },
  },
  closedMenu: {
    "& > div": {
      margin: "15px 0",
      [theme.breakpoints.down("md")]: {
        margin: "8px 0",
      },
      "&:first-child": {
        marginTop: 0,
      },
      "&:last-child": {
        marginBottom: 0,
      },
    },
  },
  firstLine: {
    transform: "rotate(45deg)",
  },
  secondLine: {
    display: "none",
  },
  thirdLine: {
    transform: "rotate(135deg)",
  },
  line: {
    transitionDuration: ".25s",
    width: 50,
    height: 2,
    borderRadius: 2,
    background: "#A71AEA",
    [theme.breakpoints.down("md")]: {
      width: 30,
      height: 1,
    },
  },
}));
