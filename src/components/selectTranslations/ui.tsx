import { useState } from "react";
import { useStyles } from "./styles";
import clsx from "clsx";

export const SelectTranslations = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(1);
  const onClickTranslation = (value: number) => () => {
    setSelected(value);
  };

  return (
    <div className={classes.container}>
      <div
        className={clsx([
          classes.translation,
          { [classes.selected]: selected === 1 },
        ])}
        onClick={onClickTranslation(1)}
      >
        RU
      </div>
      <div
        className={clsx([
          classes.translation,
          { [classes.selected]: selected === 2 },
        ])}
        onClick={onClickTranslation(2)}
      >
        HE
      </div>
    </div>
  );
};
