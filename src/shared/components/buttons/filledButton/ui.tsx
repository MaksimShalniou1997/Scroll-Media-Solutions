import React, { FC } from "react";
import { Button } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from ".";
import { IMainButton } from "..";

export const FilledButton: FC<IMainButton> = ({ 
  text, 
  longer,
  disabled,
  startIcon,
  className: classNameFromProps, 
  onClick: eventAction
}) => {
  const classes = useStyles()

  return (
    <Button 
      className={clsx(
        [classes.button], 
        [classNameFromProps],
        {[classes.longer]: longer}
      )} 
      startIcon={startIcon}
      variant="contained"
      onClick={eventAction}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}