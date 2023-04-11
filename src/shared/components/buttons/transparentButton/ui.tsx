import { Button } from "@material-ui/core";
import clsx from "clsx";
import React, { FC } from "react";
import { useStyles } from ".";
import { IMainButton } from "..";

export const TransparentButton: FC<IMainButton> = ({ 
  text, 
  longer,
  disabled,
  className: classNameFromProps,
  onClick: eventAction
}) => {
  const classes = useStyles()

  return (
    <div className={clsx([classes.mainWrapper], [classNameFromProps])}>
      <div className={clsx(
        [classes.wrapper],
        {
          [classes.longer]: longer,
          [classes.disabled]: disabled
        }
      )}>
        <Button
          className={clsx([classes.button])}
          variant="outlined"
          onClick={eventAction}
          disabled={disabled}
        >
          {text}
        </Button>
      </div>
      <div className={clsx({[classes.ghostWrapper]: !disabled})} />
    </div>
  )
}