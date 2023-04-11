import { FilledButton } from "../../shared/components/buttons";
import { Card } from "../card";
import { useStyles } from "./styles";

export const ProvidePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p className={classes.text}>We provide</p>
      <div className={classes.wrapper}>
        <Card
          title="Booking. Tickets. Promotions"
          textColor="#000000"
          color="#FFFC31"
        />
        <Card title="Birthday" textColor="#FFFFFF" color="#A71AEA" vip />
        <Card title="Public skating" textColor="#FFFFFF" color="#0EB1D2" />
        <Card
          title="Professional skating"
          textColor="#000000"
          color="#FFA7A7"
        />
        <Card title="Groups" textColor="#000000" color="#A6FA98" />{" "}
        <Card title="Pro shop" textColor="#000000" color="#FBB70A" />
      </div>
      <FilledButton
        text="Skate permission"
        onClick={() => {}}
        className={classes.skateBtn}
      />
    </div>
  );
};
