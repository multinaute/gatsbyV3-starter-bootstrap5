import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function imagesAndFigures() {
  return (
    <div>
      <h1 className="container text-danger">Fluid Images</h1>

      <StaticImage
        className="StaticImage-fluid"
        src="https://pixelprowess.com/i/park.jpg"
        alt="Robots in the Park"
      />

      <hr />

      <div className="container">
        <h1 className="text-danger">Thumbnail</h1>
        <StaticImage
          className="StaticImage-thumbnail"
          src="https://pixelprowess.com/i/park_tn.png"
          alt="Robots in the Park"
        />
      </div>
      <hr />
      <h1 className="text-danger">Images and Thumbnails</h1>

      <h3>The Social Impact of Collective Artificial Intelligence</h3>
      <div className="clearfix bg-warning" style={{ padding: "20px" }}>
        <StaticImage
          className="float-start"
          src="https://pixelprowess.com/i/park_tn.png"
          alt="Robots in the Park"
          style={{ padding: "20px" }}
        />
        <StaticImage
          className="float-end"
          src="https://pixelprowess.com/i/computer_tn.png"
          alt="Robots in the Park"
          style={{ padding: "20px" }}
        />
        Throughout history, robots have both embraced and rejected the act of
        working with other robots in a collective.
      </div>

      <hr />

      <h3>The Social Impact of Collective Artificial Intelligence</h3>
      <p>
        <StaticImage
          className="clearfix float-end StaticImage-thumbnail"
          src="https://pixelprowess.com/i/shop_tn.png"
          alt="Robots in the Park"
          style={{ padding: "20px" }}
        />
        While some still believe that humans never existed, there is substantial
        evidence that shows they had a huge impact on our world. Their limited
        life spans, vulnerabilities to physical damage, and passions for doing
        whatever their parents told them not to do, all added up to a
        fascinating and frustrating life story of these allegedly sentient
        beings.
      </p>
      <hr />
      <h1 className="text-danger">Figures and Captions</h1>

      <figure className="figure">
        <StaticImage
          className="figure-img img-fluid"
          src="https://pixelprowess.com/i/shop.jpg"
          alt="Robots in the Park"
        />
        <figcaption className="figure-caption">
          Our friend Fred (pictured left) is made from megalluminum and powered
          by hyperneutronic flash energy.
        </figcaption>
      </figure>

      <p>
        A growing number of robots were interested in being on the road
        full-time. Social media influencers Plam and Plotter, co-stars of the
        Travel-Worn Robots TubeYou channel, shared their experience and tips to
        transitioning to life on the road.
      </p>
      <p>
        After the session, participants were asked to raise a limb to show how
        many of them were interested in living full-time in their camper, and
        nearly all said they would love to be full-timers at least part of the
        time.
      </p>
    </div>
  )
}

export default imagesAndFigures
