import React from "react"
// import { StaticImage } from "gatsby-plugin-image"

function borders() {
  return (
    <div>
      <h1 className="text-danger">Border classNamees</h1>
      <h4>border</h4>
      <div
        className="border bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>
      <hr />
      <h2 className="text-danger">Additive</h2>
      <hr />
      <h4>border-top</h4>
      <div
        className="border-top bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>
      <hr />
      <h4>border-end</h4>
      <div
        className="border-end bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>
      <hr />
      <h4>border-bottom</h4>
      <div
        className="border-bottom bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>
      <hr />
      <h4>border-start</h4>
      <div
        className="border-start bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>
      <hr />
      <div
        className="border bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>
      <hr />
      <h2 className="text-danger">Substractive</h2>
      <hr />
      <h4>border-0</h4>
      <div
        className="border border-0 bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>
      <hr />
      <h4>border-top-0</h4>
      <div
        className="border border-top-0 bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>
      <hr />
      <h4>border-end-0</h4>
      <div
        className="border border-end-0 bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>
      <hr />
      <h4>border-bottom-0</h4>
      <div
        className="border border-bottom-0 bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>
      <hr />
      <h4>border-start-0</h4>
      <div
        className="border border-start-0 bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>
      <hr />
      <h1 className="text-danger">Contextual Border Classes</h1>

      <h4>border-primary</h4>
      <div
        className="border border-primary bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-secondary</h4>
      <div
        className="border border-secondary bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-success</h4>
      <div
        className="border border-success bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-danger</h4>
      <div
        className="border border-danger bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-warning</h4>
      <div
        className="border border-warning bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-info</h4>
      <div
        className="border border-info bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-light</h4>
      <div
        className="border border-light bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-dark</h4>
      <div
        className="border border-dark bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-white</h4>
      <div
        className="border border-white bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h1 className="text-danger">Contextual Border Classes</h1>

      <h4>border</h4>
      <div
        className="border border-primary bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-primary</h4>
      <div
        className="border border-1 border-primary bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-success</h4>
      <div
        className="border border-2 border-success bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-danger</h4>
      <div
        className="border border-3 border-danger bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-warning</h4>
      <div
        className="border border-4 border-warning bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h4>border-info</h4>
      <div
        className="border border-5 border-info bg-light"
        style={{ width: "100px", height: "100px" }}
      ></div>

      <hr />

      <h1 className="text-danger">Thumbnail</h1>

      {/* <h4>rounded</h4>
      <StaticImage
        className="rounded img-fluid"
        src="https://pixelprowess.com/i/flight.jpg"
        alt="Robots in the Park"
      />

      <hr />

      <h4>rounded-top</h4>
      <StaticImage
        className="rounded-top img-fluid"
        src="https://pixelprowess.com/i/flight.jpg"
        alt="Robots in the Park"
      />

      <hr />

      <h4>rounded-end</h4>
      <StaticImage
        className="rounded-end img-fluid"
        src="https://pixelprowess.com/i/flight.jpg"
        alt="Robots in the Park"
      />

      <hr />

      <h4>rounded-bottom</h4>
      <StaticImage
        className="rounded-bottom img-fluid"
        src="https://pixelprowess.com/i/flight.jpg"
        alt="Robots in the Park"
      />

      <hr />

      <h4>rounded-start</h4>
      <StaticImage
        className="rounded-start img-fluid"
        src="https://pixelprowess.com/i/flight.jpg"
        alt="Robots in the Park"
      />

      <hr />

      <h4>rounded-circle</h4>
      <StaticImage
        className="rounded-circle img-fluid"
        src="https://pixelprowess.com/i/flight.jpg"
        alt="Robots in the Park"
      />

      <hr />

      <h4>rounded-pill</h4>
      <StaticImage
        className="rounded-pill img-fluid"
        src="https://pixelprowess.com/i/flight.jpg"
        alt="Robots in the Park"
      />
      <hr />

      <h1 class="text-danger">Rounded Size</h1>

      <h4>rounded-0</h4>
      <StaticImage
        class="rounded-0 img-fluid"
        src="https://pixelprowess.com/i/flight.jpg"
        alt="Robots in the Park"
      />

      <hr />

      <h4>rounded-1</h4>
      <StaticImage
        class="rounded-1 img-fluid"
        src="https://pixelprowess.com/i/flight.jpg"
        alt="Robots in the Park"
      />

      <hr />

      <h4>rounded-2</h4>
      <StaticImage
        class="rounded-2 img-fluid"
        src="https://pixelprowess.com/i/flight.jpg"
        alt="Robots in the Park"
      />

      <hr />

      <h4>rounded-3</h4>
      <StaticImage
        class="rounded-3 img-fluid"
        src="https://pixelprowess.com/i/flight.jpg"
        alt="Robots in the Park"
      />

      <hr />

      <h1 class="text-danger">Thumbnail</h1>

      <h4>None</h4>
      <StaticImage
        class="img-thumbnail shadow-none"
        src="https://pixelprowess.com/i/flight_tn.png"
        alt="Robots in the Park"
      />

      <hr />

      <h4>shadow-sm</h4>
      <StaticImage
        class="img-thumbnail shadow-sm"
        src="https://pixelprowess.com/i/flight_tn.png"
        alt="Robots in the Park"
      />

      <hr />

      <h4>shadow</h4>
      <StaticImage
        class="img-thumbnail shadow"
        src="https://pixelprowess.com/i/flight_tn.png"
        alt="Robots in the Park"
      />

      <hr />

      <h4>shadow-lg</h4>
      <StaticImage
        class="img-thumbnail shadow-lg"
        src="https://pixelprowess.com/i/flight_tn.png"
        alt="Robots in the Park"
      /> */}

      <hr />
    </div>
  )
}

export default borders
