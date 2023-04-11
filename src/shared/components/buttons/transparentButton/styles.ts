import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    position: "relative",

    "&:hover": {
      "& $ghostWrapper": {
        opacity: 1,
      },
    },
  },
  ghostWrapper: {
    position: "absolute",
    content: '""',
    opacity: 0,
    left: -1,
    right: -1,
    top: -1,
    bottom: -1,
    borderRadius: 50,
    zIndex: -1,
    transition: "0.1s",
  },
  wrapper: {
    padding: 1,
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  button: {
    background: "none",
    width: "100%",
    height: "100%",
    border: "1px solid #FFFC31",
    borderRadius: 35,
    "&:hover": {
      background: "#FFFC31",
    },

    "& .MuiButton-label": {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "130%",
      [theme.breakpoints.down("md")]: {
        fontSize: 10,
      },
    },
  },
  longer: {
    width: "100%",
    maxWidth: 612,
  },
  disabled: {
    background: theme.palette.primary.light,
  },
}));
