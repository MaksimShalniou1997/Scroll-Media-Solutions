import { useStyles } from "./styles";
import Slider from "react-slick";
import image from "./image.jpeg";
import clsx from "clsx";
import { ReactComponent as PreviewArrow } from "../../shared/svgs/previewArrow.svg";
import { ReactComponent as NextArrow } from "../../shared/svgs/nextArrow.svg";
import { useState } from "react";
import { Message } from "../message";

export const Celebrate = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
      <PreviewArrow
        className={`${className} ${classes.prevArrow}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
      <NextArrow
        className={`${className} ${classes.nextArrow}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    afterChange: (currentSlide: number) => setSelected(currentSlide),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Message />
        <div className={classes.textWrapper}>
          <p className={classes.birthday}>Are you celebrating a birthday?</p>
          <p className={classes.celebrate}>Come celebrate with us!</p>
        </div>
        <div className={classes.cardWrapper}>
          <img
            src={image}
            alt=""
            className={clsx([classes.imageCard], {
              [classes.selected]: selected === 0,
            })}
          />
          <img
            src={image}
            alt=""
            className={clsx([classes.imageCard], {
              [classes.selected]: selected === 1,
            })}
          />
          <img
            src={image}
            alt=""
            className={clsx([classes.imageCard], {
              [classes.selected]: selected === 2,
            })}
          />
        </div>
        <Slider {...settings} className={classes.slider}>
          <div>
            <img src={image} alt="" className={classes.image} />
          </div>
          <div>
            <img src={image} alt="" className={classes.image} />
          </div>{" "}
          <div>
            <img src={image} alt="" className={classes.image} />
          </div>
        </Slider>
      </div>
    </div>
  );
};
