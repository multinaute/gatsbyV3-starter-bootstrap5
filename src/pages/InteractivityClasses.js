import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function InteractivityClasses() {
  return (
    <div>
      <h1 className="text-info">Overflow</h1>

      <div className="d-flex">
        <div className="p-3 overflow-auto bg-info" style={{ height: "150px" }}>
          <h5>overflow-auto</h5>
          <p>
            While robots have evolved to be able to do pretty much anything,
            most androids and bots work in the construction and manufacturing
            field as force multipliers. As experts in lifting, moving, and
            nuts-and-bolting, the robotic population is an ideal match for
            industry and repetitive tasks.
          </p>
        </div>

        <div
          className="p-3 overflow-hidden bg-info"
          style={{ height: "150px" }}
        >
          <h5>overflow-hidden</h5>
          <p>
            While robots have evolved to be able to do pretty much anything,
            most androids and bots work in the construction and manufacturing
            field as force multipliers. As experts in lifting, moving, and
            nuts-and-bolting, the robotic population is an ideal match for
            industry and repetitive tasks.
          </p>
        </div>

        <div
          className="p-3 overflow-visible bg-info"
          style={{ height: "150px" }}
        >
          <h5>overflow-visible</h5>
          <p>
            While robots have evolved to be able to do pretty much anything,
            most androids and bots work in the construction and manufacturing
            field as force multipliers. As experts in lifting, moving, and
            nuts-and-bolting, the robotic population is an ideal match for
            industry and repetitive tasks.
          </p>
        </div>

        <div
          className="p-3 overflow-scroll bg-info"
          style={{ height: "150px" }}
        >
          <h5>overflow-scroll</h5>
          <p>
            While robots have evolved to be able to do pretty much anything,
            most androids and bots work in the construction and manufacturing
            field as force multipliers. As experts in lifting, moving, and
            nuts-and-bolting, the robotic population is an ideal match for
            industry and repetitive tasks.
          </p>
        </div>
      </div>

      <hr />

      <h1>Stretched Link</h1>

      <div
        className="p-4 text-white position-relative bg-warning"
        style={{ width: "500px" }}
      >
        <StaticImage
          className="rounded img-fluid"
          src="https://pixelprowess.com/i/flight.jpg"
          alt="Robots in the Park"
        />
        <h3 className="mt-2">Dolores</h3>
        <p className="text-wrap">
          While robots have evolved to be able to do pretty much anything, most
          androids and bots work in the construction and manufacturing field as
          force multipliers.
        </p>
        <Link
          to="#"
          className="px-2 py-1 text-white stretched-link text-decoration-none d-inline-block bg-danger rounded-2"
        >
          Bubbles
        </Link>
      </div>
      <hr />
      <h1>User Select</h1>
      <div className="d-flex">
        <div className="p-4 text-white position-relative bg-primary">
          <h3 className="mt-2">user-select-auto</h3>
          <p className="user-select-auto">
            While robots have evolved to be able to do pretty much anything,
            most androids and bots work in the construction and manufacturing
            field as force multipliers.
          </p>
        </div>
        <div className="p-4 text-white position-relative bg-danger">
          <h3 className="mt-2">user-select-all</h3>
          <p className="user-select-all">
            While robots have evolved to be able to do pretty much anything,
            most androids and bots work in the construction and manufacturing
            field as force multipliers.
          </p>
        </div>
        <div className="p-4 text-white position-relative bg-success">
          <h3 className="mt-2">user-select-none</h3>
          <p className="user-select-none">
            While robots have evolved to be able to do pretty much anything,
            most androids and bots work in the construction and manufacturing
            field as force multipliers.
          </p>
        </div>
      </div>
      <hr />
      <h1>User Select</h1>
      <div className="d-flex">
        <div className="p-4 text-white position-relative bg-secondary">
          <h3 className="mt-2">pe-none</h3>
          <p>
            While{" "}
            <Link
              to="#"
              tabindex="-1"
              ariaDisabled="true"
              className="pe-none text-warning"
            >
              robots have evolved
            </Link>{" "}
            to be able to do pretty much anything, most androids and bots work
            in the construction and manufacturing field as force multipliers.
          </p>
        </div>
        <div className="p-4 text-white pe-none position-relative bg-warning">
          <h3 className="mt-2">pe-auto</h3>
          <p>
            While{" "}
            <Link to="#" className="pe-auto text-secondary">
              robots have evolved
            </Link>{" "}
            to be able to do pretty much anything, most androids and bots work
            in the construction and manufacturing field as force multipliers.
          </p>
        </div>
      </div>
    </div>
  )
}

export default InteractivityClasses
