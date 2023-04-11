import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginLeft: 30,
    marginRight: 50,
    [theme.breakpoints.down("md")]: {
      marginLeft: 10,
      marginRight: 10,
    },
  },
  translation: {
    fontFamily: "Montserrat",
    fontWeight: 800,
    fontSize: 16,
    lineHeight: 20,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      width: 40,
      height: 40,
      fontSize: 10,
    },
    "&:first-child": {
      marginRight: 20,
    },
  },
  selected: {
    background: "#A71AEA",
    color: theme.palette.secondary.main,
    border: "none",
  },
}));
