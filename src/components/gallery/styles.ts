import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: 1350,
    background: "#A71AEA",
    borderRadius: 100,
    position: "relative",
    bottom: -100,
    [theme.breakpoints.down("md")]: {
      height: "60vh",
      borderRadius: 50,
    },
  },
  imagesContainer: {
    display: "flex",
    gap: 20,
  },
  wrapper: {
    gap: 20,
  },
  imagesWrapper: {
    display: "flex",
    gap: 20,
    marginTop: 20,
  },
  prevArrow: {
    width: 100,
    height: 100,
    display: "block",
    position: "absolute",
    top: "50%",
    zIndex: 100,
    left: -50,
    backdropFilter: "blur(7.5px)",
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
      width: "15px !important",
      height: "15px !important",
      left: "0 !important",
    },
  },
  nextArrow: {
    width: 100,
    height: 100,
    display: "block",
    position: "absolute",
    top: "50%",
    right: 50,
    zIndex: 100,
    backdropFilter: "blur(7.5px)",
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
      width: "15px !important",
      height: "15px !important",
      right: "20px !important",
    },
  },
  textWrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "131px 414px 0 250px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 60px 0 50px",
    },
  },
  title: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "130%",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
  text: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: "200%",
    color: "#FFFC31",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  bold: {
    fontWeight: 700,
  },
  image: {
    width: 850,
    height: 490,
    borderRadius: 50,
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      borderRadius: 20,
      width: "40vw",
      height: "15vh",
    },
  },
  image2: {
    width: 340,
    height: 490,
    borderRadius: 50,
    gap: 20,
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      borderRadius: 20,
      width: "15vw",
      height: "15vh",
    },
  },
  image3: {
    width: 490,
    height: 490,
    borderRadius: 50,
    gap: 20,
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      borderRadius: 20,
      width: "25vw",
      height: "15vh",
    },
  },
  image4: {
    width: 850,
    height: 1000,
    borderRadius: 50,
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      borderRadius: 20,
      width: "40vw",
      height: "calc(30vh + 20px)",
    },
  },
  slider: {
    marginLeft: 100,
    [theme.breakpoints.down("md")]: {
      marginLeft: 20,
    },
  },
  lines: {
    position: "absolute",
    top: -380,
    left: 0,
    [theme.breakpoints.down("md")]: {
      top: -260,
      "& > svg": {
        width: 200,
        height: 400,
      },
    },
  },
}));
