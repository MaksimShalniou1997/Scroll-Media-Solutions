import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  footer: {
    height: 360,
    background: "#480269",
    padding: "138.5px 100px 55px 100px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      padding: "120px 20px 10px 20px",
    },
  },
  firstWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "60%",
    justifyContent: "space-between",
    alignSelf: "start",
  },
  secondWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "80%",
    justifyContent: "space-between",
    alignSelf: "start",
  },
  thirdsWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "50%",
    justifyContent: "space-between",
    alignSelf: "start",
  },
  rightsWrapper: {
    marginTop: 46,
  },
  iceHall: {
    fontWeight: 400,
    fontSize: 36,
    lineHeight: "130%",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
  bold: {
    fontWeight: 700,
  },
  fullHeight: {
    height: "100%",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
    },
  },
  number: {
    fontWeight: 700,
    fontSize: 40,
    lineHeight: "130%",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  ticketBtn: {
    width: 250,
    height: 60,
    [theme.breakpoints.down("md")]: {
      width: 200,
      height: 40,
    },
  },
  signUp: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: "130%",
    color: theme.palette.secondary.main,
    alignSelf: "end",
    [theme.breakpoints.down("md")]: {
      marginBottom: 20,
      fontSize: 16,
    },
  },
  text: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "130%",
    color: theme.palette.secondary.main,
    width: 400,
    [theme.breakpoints.down("md")]: {
      width: 200,
      fontSize: 12,
    },
  },
  mail: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "130%",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
    },
  },
  buttonsWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "50%",
    justifyContent: "space-between",
    alignSelf: "start",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 20,
      margin: "20px 0",
    },
  },
  svgsWrapper: {
    display: "flex",
    gap: 20,
    [theme.breakpoints.down("md")]: {
      marginTop: 20,
      "& > svg": {
        width: 30,
        height: 30,
      },
    },
  },
  FAQBtn: {
    width: 250,
    height: 60,
    background: theme.palette.secondary.main,
    borderRadius: 40,
    [theme.breakpoints.down("md")]: {
      width: 200,
      height: 40,
    },
    "& > div > button": {
      border: `1px solid ${theme.palette.secondary.main}`,
      "&:hover": {
        background: theme.palette.secondary.main,
        opacity: 0.8,
      },
    },
  },
  rightsReserved: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "130%",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  policy: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "130%",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  development: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "130%",
    color: theme.palette.secondary.main,
    marginRight: 20,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
      marginRight: 0,
    },
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: 20,
      justifyContent: "space-between",
      width: "100%",
    },
  },
  signUpBtn: {
    width: "auto",
    height: 60,
  },
  textField: {
    minWidth: "488px !important",
    height: 60,
    background: "rgba(255, 255, 255, 0.2)",
    border: `1px solid ${theme.palette.secondary.main} !important`,
    borderRadius: 100,
    [theme.breakpoints.down("md")]: {
      minWidth: "70vw !important",
    },
    "& > div": {
      padding: 0,
      height: 60,
      "& > input": {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: "130%",
        color: `${theme.palette.secondary.main} !important`,
      },
    },
    "& > label": {
      paddingLeft: 20,
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "130%",
      color: `${theme.palette.secondary.main} !important`,
    },
  },
}));
