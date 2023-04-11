import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  select: {
    padding: 0,
    background: "#A71AEA",
    "& .MuiSelect-outlined": {
      padding: 0,
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      color: theme.palette.secondary.main,
      fontFamily: "Montserrat",
      fontSize: 32,
      lineHeight: "130%",
      [theme.breakpoints.down("md")]: {
        fontSize: 10,
      },
    },
    "& > div": {},
  },
  paper: {
    borderRadius: 14,
  },
  arrow: {
    padding: "0px 21px 0px 33px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 5px 0px 5px",
      "& > svg": {
        height: 10,
        width: 10,
      },
    },
  },
}));
