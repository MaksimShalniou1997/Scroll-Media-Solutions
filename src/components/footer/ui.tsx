import {
  FilledButton,
  TransparentButton,
} from "../../shared/components/buttons";
import { useStyles } from "./";
import { ReactComponent as ScrollLogo } from "../../shared/svgs/scrollLogo.svg";
import { ReactComponent as Instagram } from "../../shared/svgs/instagram.svg";
import { ReactComponent as Facebook } from "../../shared/svgs/facebook.svg";
import { InputAdornment, TextField } from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";

export const Footer = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");

  return (
    <footer className={classes.footer}>
      <div className={clsx([classes.wrapper], [classes.fullHeight])}>
        <div className={classes.firstWrapper}>
          <p className={classes.iceHall}>
            Ice Hall <span className={classes.bold}>Holon</span>
          </p>
          <p className={classes.text}>
            Shlomo Bay Street, corner of Jerusalem Avenue, Sportets Peres Park,
            near the Children's Museum
          </p>
        </div>
        <div className={classes.secondWrapper}>
          <p className={classes.number}>03-5323008</p>
          <p className={classes.mail}>info@icepeaks.co.il</p>
          <div className={classes.svgsWrapper}>
            <Instagram />
            <Facebook />
          </div>
        </div>
        <div className={classes.buttonsWrapper}>
          <FilledButton
            text="Tickets"
            onClick={() => {}}
            className={classes.ticketBtn}
          />
          <TransparentButton
            text="FAQ"
            onClick={() => {}}
            className={classes.FAQBtn}
          />
        </div>
        <div className={classes.thirdsWrapper}>
          <p className={classes.signUp}>
            Signup for newsletter, promo and updates
          </p>
          <TextField
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            label={!inputValue ? "Your e-mail" : ""}
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{ shrink: false }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FilledButton
                    className={classes.signUpBtn}
                    text="Signup"
                    onClick={() => {}}
                  />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>

      <div className={`${classes.wrapper} ${classes.rightsWrapper}`}>
        <p className={classes.rightsReserved}>
          © 2023 IcePeaks. All rights reserved
        </p>
        <p className={classes.policy}>Privacy Policy</p>
        <div className={classes.logoWrapper}>
          <p className={classes.development}>Website development</p>
          <ScrollLogo />
        </div>
      </div>
    </footer>
  );
};
