import { useStyles } from "./styles";

export const Message = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p className={classes.text}>
        Your message here. Your message here. Your message here. Your message
        Your message Your message Your message Your message Your message Your
        message Your message Your message Your message
      </p>
    </div>
  );
};
