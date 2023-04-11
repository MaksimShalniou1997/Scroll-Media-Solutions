import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const getCustomTheme = (primary, secondary) => {
  const theme = responsiveFontSizes(
    createTheme({
      spacing: 4,
      props: {
        MuiButtonBase: {
          disableRipple: true,
        },
      },
      palette: {
        primary: {
          light: "#EFEFEF",
          main: primary || "#FFFFFF",
          dark: "#333333",
        },
        secondary: {
          main: secondary || "#E5E5E5",
          dark: "#565656",
        },
        error: {
          main: "#D72A2A",
        },
        field: {
          background: "#F8F9FD",
        },
        hover: {
          main: "#33333330",
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 900,
          lg: 1500,
        },
      },
    })
  );

  theme.overrides = {
    MuiOutlinedInput: {
      root: {
        "& .MuiOutlinedInput-input": {
          paddingLeft: 30,
        },

        "&.MuiOutlinedInput-multiline": {
          paddingLeft: 0,
        },

        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&.Mui-focused": {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
      notchedOutline: {
        borderColor: theme.palette.primary.light,
      },
    },
    MuiMenuItem: {
      root: {
        width: "100%",
        padding: "14.5px 16px !important",
      },
    },
    MuiButton: {
      contained: {
        borderRadius: 50,
        textTransform: "inherit",
        fontWeight: 600,
        fontSize: 18,
        lineHeight: "26px",
        padding: "12px 37px",
        color: theme.palette.secondary.main,
        boxShadow: "none",
        opacity: 0.9,
        transition: "0.1s",

        "&:hover": {
          boxShadow: "none",
          opacity: 1,
        },

        "&:active": {
          boxShadow:
            "0px 8px 8px rgba(50, 50, 71, 0.08), 0px 8px 16px rgba(50, 50, 71, 0.06)",
        },

        "&.Mui-disabled": {
          background: theme.palette.primary.light,
          color: theme.palette.primary.dark,

          "& .MuiButton-startIcon": {
            opacity: 0.5,
          },
        },
      },

      outlined: {
        borderRadius: 50,
        textTransform: "inherit",
        fontWeight: 600,
        fontSize: 18,
        lineHeight: "26px",
        padding: "12px 23px",
        color: theme.palette.primary.main,

        "&:hover": {
          background: theme.palette.secondary.main,
        },

        "&:active": {
          boxShadow:
            "0px 8px 8px rgba(50, 50, 71, 0.08), 0px 8px 16px rgba(50, 50, 71, 0.06)",
        },

        "&.Mui-disabled": {
          "& .MuiButton-label": {
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          },
        },
      },
    },
  };

  return theme;
};
