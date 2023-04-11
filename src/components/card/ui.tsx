import { useStyles, ICard } from "./";
import card from "./card.png";
import { ReactComponent as Vip } from "../../shared/svgs/vip.svg";

export const Card = ({ title, textColor, color, vip }: ICard) => {
  const classes = useStyles({ color, textColor });

  return (
    <div className={classes.container}>
      {vip && (
        <div className={classes.vip}>
          <Vip />
        </div>
      )}
      <p className={classes.text}>{title}</p>
      <img src={card} alt="" className={classes.card} />
    </div>
  );
};
