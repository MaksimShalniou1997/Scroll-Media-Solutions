import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.secondary.main,
    borderRadius: 100,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      top: -30,
      borderRadius: 50,
    },
  },
  text: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "130%",
    color: "#1A54EA",
    textAlign: "start",
    marginLeft: 250,
    paddingTop: 136,
    marginTop: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: 32,
      textAlign: "center",
      marginLeft: 0,
      paddingTop: 30,
      marginBottom: 20,
    },
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px 24px",
    justifyContent: "center",
  },
  skateBtn: {
    height: 100,
    width: 940,
    marginTop: 110,
    marginBottom: 170,
    alignSelf: "center",
    [theme.breakpoints.down("md")]: {
      maxWidth: 940,
      width: "calc(100% - 20px)",
      height: 60,
      marginTop: 40,
      marginBottom: 70,
    },
  },
}));
