import React from "react"
import { Link } from "gatsby"

function typographyModications() {
  return (
    <div>
      <h1 className="text-info">Text Wrap/Break</h1>
      <h3 className="text-secondary">text-wrap</h3>
      <p className="text-wrap">
        While robots have evolved to be able to do pretty much anything, most
        androids and bots work in the construction and manufacturing field as
        force multipliers.
      </p>
      <hr />
      <h3 className="text-secondary">text-nowrap</h3>
      <p className="text-nowrap">
        While robots have evolved to be able to do pretty much anything, most
        androids and bots work in the construction and manufacturing field as
        force multipliers.
      </p>
      <hr />
      <h3 className="text-secondary">text-break</h3>
      <p className="text-break">Hippopotomonstrosesquippedaliophobia</p>
      <hr />
      <h1 className="text-info">Text Transform</h1>
      <h3 className="text-secondary">text-lowercase</h3>
      <p className="text-lowercase">SPACE TRAVEL AND EXPLORATION</p>
      <hr />
      <h3 className="text-secondary">text-uppercase</h3>
      <p className="text-uppercase">intricate surgery</p>
      <hr />
      <h3 className="text-secondary">text-capitalize</h3>
      <p className="text-capitalize">superFast mass production</p>
      <hr />
      <h1 className="text-info">Vertical Alignment</h1>

      <div className="bg-light" style={{ lineHeight: "100px" }}>
        <span className="align-baseline">Rex</span>
        <span className="align-top">Dolores</span>
        <span className="align-middle">Bubbles</span>
        <span className="align-bottom">Fred</span>
        <span className="align-text-top">Rivet</span>
        <span className="align-text-bottom">Eileen</span>
      </div>
      <hr />
      <hr />
      <h1 className="text-info">Miscellaneous</h1>

      <h3 className="text-secondary">font-monospace</h3>
      <p className="font-monospace">
        There’s nothing more relaxing than an oil change and a polish, no matter
        what kind of robotting you do in your daily existence. Our world-class
        spa is now offering an Ultimate Robot Spa Treatment, a circuit-blowing
        combination of all of your favorite treatments.
      </p>

      <hr />

      <h3 className="text-reset">text-reset</h3>
      <p className="text-danger">
        There’s nothing more relaxing than an
        <Link to="#" className="text-reset">
          oil change
        </Link>
        and a polish, no matter what kind of robotting you do in your daily
        existence. Our world-class spa is now offering an Ultimate Robot Spa
        Treatment, a circuit-blowing combination of all of your favorite
        treatments.
      </p>

      <hr />
    </div>
  )
}

export default typographyModications
