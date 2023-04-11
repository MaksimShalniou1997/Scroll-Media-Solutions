import { makeStyles } from "@material-ui/core";
import { IThemeProps } from "./";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: 557,
    height: 600,
    borderRadius: 50,
    backgroundColor: ({ color }: IThemeProps) => color,
    [theme.breakpoints.down("md")]: {
      height: 500,
      maxWidth: "calc(100% - 20px)",
    },
  },
  vip: {
    position: "absolute",
    top: -150,
    right: 0,
    zIndex: 100,
    [theme.breakpoints.down("md")]: {
      top: -50,
      right: 0,
      "& > svg": {
        width: 150,
        height: 250,
      },
    },
  },
  text: {
    margin: "87px auto auto 57.5px",
    textAlign: "start",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 40,
    lineHeight: "110%",
    display: "table-caption",
    color: ({ textColor }: IThemeProps) => textColor,
    [theme.breakpoints.down("md")]: {
      fontSize: 26,
      margin: "30px auto auto 20px",
    },
  },
  card: {
    bottom: -1,
    left: -1,
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      maxWidth: "calc(100% + 2px)",
      maxHeight: "70%",
      borderRadius: 50,
    },
  },
}));
