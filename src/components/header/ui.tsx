import { useStyles } from "./";
import { ReactComponent as Logo } from "../../shared/svgs/logo.svg";
import {
  FilledButton,
  TransparentButton,
} from "../../shared/components/buttons";
import { Select } from "../../shared/components/select";
import { MenuItem } from "@material-ui/core";
import { BurgerMenu } from "../../shared/components/burgerMenu/ui";
import { SelectTranslations } from "../selectTranslations";

export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <Select className={classes.select} value={1}>
          <MenuItem value={1}>Ice Hall Beersheba</MenuItem>
        </Select>
      </div>
      <div className={classes.wrapper}>
        <TransparentButton
          text="Operating Hours"
          onClick={() => {}}
          className={classes.operatingHoursBtn}
        />
        <FilledButton
          text="Book now!"
          onClick={() => {}}
          className={classes.bookNowBtn}
        />
        <SelectTranslations />
        <BurgerMenu />
      </div>
    </header>
  );
};
