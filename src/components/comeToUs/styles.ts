import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 100px 150px 100px",
    height: 1200,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      padding: "0 20px 30px 20px",
      height: "auto",
    },
  },
  title: {
    marginTop: 100,
    marginLeft: 250,
    fontSize: 96,
    lineHeight: "130%",
    color: "#1A54EA",
    [theme.breakpoints.down("md")]: {
      fontSize: 32,
      marginTop: 50,
      marginLeft: 0,
      textAlign: "center",
    },
  },
  mapContainer: {
    [theme.breakpoints.down("md")]: {
      "& > div": {
        maxHeight: "70vh",
        borderRadius: "50px !important",
      },
    },
  },
}));
