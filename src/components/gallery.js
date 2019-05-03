import React from "react"
import Carousel from "nuka-carousel"

export default class extends React.Component {
  render() {
    return (
      <Carousel>
        <img
          alt="Heyo 1"
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"
        />
        <img
          alt="Heyo 1"
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"
        />
        <img
          alt="Heyo 1"
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"
        />
        <img
          alt="Heyo"
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"
        />
        <img
          alt="Heyo"
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"
        />
        <img
          alt="Heyo 1"
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"
        />
      </Carousel>
    )
  }
}
