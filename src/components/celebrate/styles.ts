import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    background: "#A71AEA",
    width: "100%",
    height: 959,
    [theme.breakpoints.down("md")]: {
      maxHeight: "70vh",
    },
  },
  wrapper: {
    position: "relative",
  },
  prevArrow: {
    width: 100,
    height: 100,
    display: "block",
    position: "absolute",
    top: "50%",
    zIndex: 100,
    left: 100,
    backdropFilter: "blur(7.5px)",
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
      width: "15px !important",
      height: "15px !important",
      left: "20px !important",
    },
  },
  nextArrow: {
    width: 100,
    height: 100,
    display: "block",
    position: "absolute",
    top: "50%",
    right: 100,
    zIndex: 100,
    backdropFilter: "blur(7.5px)",
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
      width: "15px !important",
      height: "15px !important",
      right: "20px !important",
    },
  },
  image: {
    width: 1210,
    height: 959,
    float: "right",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      width: "70vw",
      maxHeight: "70vh",
    },
  },
  slider: {
    display: "flex",
    justifyContent: "end",
  },
  cardWrapper: {
    display: "flex",
    gap: 20,
    position: "absolute",
    bottom: 150,
    zIndex: 100,
    left: 100,
    [theme.breakpoints.down("md")]: {
      left: 30,
      bottom: 50,
      gap: 10,
    },
  },
  imageCard: {
    width: 240,
    height: 160,
    borderRadius: 30,
    border: "5px solid transparent",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      width: 50,
      height: 40,
      border: "2px solid transparent",
      borderRadius: 20,
    },
  },
  textWrapper: {
    position: "absolute",
    top: 204,
    left: 350,
    zIndex: 10000,
    width: 800,
    [theme.breakpoints.down("md")]: {
      top: 100,
      left: 20,
      width: 300,
    },
  },
  selected: {
    border: "5px solid #FFFC31",
    [theme.breakpoints.down("md")]: {
      border: "2px solid #FFFC31",
    },
  },
  birthday: {
    fontWeight: 700,
    fontSize: 48,
    lineHeight: "130%",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
  celebrate: {
    marginTop: 14,
    fontWeight: 700,
    fontSize: 96,
    lineHeight: "120%",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: 26,
    },
  },
}));
