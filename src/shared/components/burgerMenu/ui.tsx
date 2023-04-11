import { useState } from "react";
import clsx from "clsx";
import { useStyles } from "./styles";

export const BurgerMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const classes = useStyles({ isOpenMenu });

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div
      className={clsx([classes.container], {
        [classes.closedMenu]: !isOpenMenu,
      })}
      onClick={handleClickMenu}
    >
      <div
        className={clsx([classes.line], { [classes.firstLine]: isOpenMenu })}
      />
      <div
        className={clsx([classes.line], { [classes.secondLine]: isOpenMenu })}
      />
      <div
        className={clsx([classes.line], { [classes.thirdLine]: isOpenMenu })}
      />
    </div>
  );
};
