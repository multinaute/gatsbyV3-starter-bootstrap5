import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Carousel() {
  return (
    <div>
      <h1>Carousel</h1>

      <h4 className="text-secondary">Ride</h4>
      <div id="robotcarousel" className="carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <StaticImage
              className="d-block w-100"
              src="https://pixelprowess.com/i/carousel_swamp.png"
              alt="swamp"
            />
          </div>
          <div className="carousel-item active">
            <StaticImage
              className="d-block w-100"
              src="https://pixelprowess.com/i/carousel_flight.png"
              alt="flight"
            />
          </div>
        </div>
      </div>
      <hr />
      <h4 className="text-secondary">Slide</h4>
      <div
        id="robotcarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <StaticImage
              className="d-block w-100"
              src="https://pixelprowess.com/i/carousel_swamp.png"
              alt="swamp"
            />
          </div>
          <div className="carousel-item active">
            <StaticImage
              className="d-block w-100"
              src="https://pixelprowess.com/i/carousel_flight.png"
              alt="flight"
            />
          </div>
        </div>
      </div>
      <hr />
      <h4 className="text-secondary">Fade</h4>
      <div
        id="robotcarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <StaticImage
              className="d-block w-100"
              src="https://pixelprowess.com/i/carousel_swamp.png"
              alt="swamp"
            />
          </div>
          <div className="carousel-item active">
            <StaticImage
              className="d-block w-100"
              src="https://pixelprowess.com/i/carousel_flight.png"
              alt="flight"
            />
          </div>
        </div>
      </div>
      <hr />
      <h1>Carousel Button Controls</h1>

      <div
        id="robotcarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <StaticImage
              className="d-block w-100"
              src="https://pixelprowess.com/i/carousel_swamp.png"
              alt="swamp"
            />
          </div>
          <div className="carousel-item active">
            <StaticImage
              className="d-block w-100"
              src="https://pixelprowess.com/i/carousel_flight.png"
              alt="flight"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#robotcarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#robotcarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
