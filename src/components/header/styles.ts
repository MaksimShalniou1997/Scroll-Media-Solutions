import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  header: {
    background: theme.palette.secondary.main,
    height: 120,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexWrap: "wrap",
    },
  },
  wrapper: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      gap: 10,
      justifyContent: "space-around",
      marginBottom: 10,
      alignSelf: "center",
    },
  },
  logo: {
    margin: "19px 78px 21px 78px",
    [theme.breakpoints.down("md")]: {
      margin: "5px 10px 5px 10px",
    },
  },
  select: {
    height: "100%",
    minWidth: 410,
    [theme.breakpoints.down("md")]: {
      minWidth: 120,
      minHeight: 60,
    },
  },
  operatingHoursBtn: {
    height: 60,
    width: 231,
    marginRight: 20,
    [theme.breakpoints.down("md")]: {
      width: 150,
      height: 40,
    },
  },
  bookNowBtn: {
    width: 180,
    height: 60,
    [theme.breakpoints.down("md")]: {
      width: 150,
      height: 40,
    },
  },
}));
