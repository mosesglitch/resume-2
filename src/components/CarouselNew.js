import React from "react";
import Carousel from "react-bootstrap/Carousel";
import chess from "./images/chess.jpg";
import learn from "./images/learn2.jpg";
import music from "./images/music.jpg";
import film from "./images/film.jpg";
import film2 from "./images/film2.jpg";
class CarouselNew extends React.Component {
  render() {
    return (
      <div className="newsec">
        <h4>Hobbies</h4>
        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={learn} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={music} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={chess} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={film2} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselNew;
