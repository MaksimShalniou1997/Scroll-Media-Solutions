import { useStyles } from "./";
import Slider from "react-slick";
import image from "./image.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import image4 from "./image4.jpeg";
import { ReactComponent as Lines } from "../../shared/svgs/lines.svg";
import { ReactComponent as PreviewArrow } from "../../shared/svgs/previewArrow.svg";
import { ReactComponent as NextArrow } from "../../shared/svgs/nextArrow.svg";

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  const classes = useStyles();

  return (
    <PreviewArrow
      className={`${className} ${classes.prevArrow}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  const classes = useStyles();

  return (
    <NextArrow
      className={`${className} ${classes.nextArrow}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export const Gallery = () => {
  const classes = useStyles();
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const _renderImages = () => (
    <div>
      <div>
        <div className={classes.imagesContainer}>
          <div className={classes.wrapper}>
            <img src={image} alt="" className={classes.image} />
            <div className={classes.imagesWrapper}>
              <img src={image2} alt="" className={classes.image2} />
              <img src={image3} alt="" className={classes.image3} />
            </div>
          </div>
          <img src={image4} alt="" className={classes.image4} />
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.container}>
      <div className={classes.lines}>
        <Lines />
      </div>
      <div className={classes.textWrapper}>
        <h1 className={classes.title}>Gallery</h1>
        <p className={classes.text}>
          Ice is our whole story.
          <br />
          <span className={classes.bold}>Skate and be a part of it</span>
        </p>
      </div>
      <Slider {...settings} className={classes.slider}>
        {_renderImages()}
        {_renderImages()}
      </Slider>
    </div>
  );
};
