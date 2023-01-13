import { Slider, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide1 from "../../assets/slide/slide1.svg";
import Slide2 from "../../assets/slide/slide2.svg";
import Slide3 from "../../assets/slide/slide3.svg";

const CarouselSlide = () => {
  const images = [Slide1,Slide2,Slide3];

  return (
    <Carousel infiniteLoop>
      {images.map((slide) => (
        <Image src={slide} height="250px" width="600px" objectFit='cover' backgroundPosition='top'/>
      ))}
    </Carousel>
  );
};

export default CarouselSlide;
