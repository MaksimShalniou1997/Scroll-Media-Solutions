import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    background: "#FFFC31",
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
    },

    "&:hover": {
      background: "#FFFCCC",
    },
  },

  longer: {
    width: "100%",
    maxWidth: 612,
  },
}));
