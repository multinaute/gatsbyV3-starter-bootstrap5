import React from "react"
import { BiHeart } from "react-icons/bi"

const paddingStyle = {
  padding: "10px",
}

const heightStyle = {
  height: "100px",
}

function Position() {
  return (
    <div>
      <h1 className="text-danger">Positioning</h1>

      <div className="gap-2 d-grid bg-dark" style={paddingStyle}>
        <div className="p-2 text-white bg-secondary" style={heightStyle}>
          Rex
        </div>
        <div
          className="top-0 p-2 text-white position-sticky start-0 bg-danger"
          style={heightStyle}
        >
          Dolores
        </div>
        <div className="p-2 text-white bg-secondary" style={heightStyle}>
          Bubbles
        </div>
        <div className="p-2 text-white bg-secondary" style={heightStyle}>
          Fred
        </div>
        <div className="p-2 text-white bg-secondary" style={heightStyle}>
          Rivet
        </div>
      </div>

      <hr />

      <div className="gap-2 d-grid bg-dark" style={paddingStyle}>
        <div className="p-2 text-white bg-secondary" style={heightStyle}>
          Rex
        </div>
        <div className="p-2 text-white bg-secondary" style={heightStyle}>
          Dolores
        </div>
        <div className="p-2 text-white bg-secondary" style={heightStyle}>
          Bubbles
        </div>
        <div className="p-2 text-white bg-secondary" style={heightStyle}>
          Fred
        </div>
        <div className="p-2 text-white bg-secondary" style={heightStyle}>
          Rivet
        </div>
      </div>
      <hr />
      <div className="px-2 py-1 text-white position-relative d-inline-block bg-primary rounded-2">
        Bubbles
      </div>
      <div className="px-2 py-1 text-white position-relative d-inline-block bg-primary rounded-2">
        Bubbles
        <BiHeart className="top-0 position-absolute start-100 translate-middle text-danger" />
      </div>
    </div>
  )
}

export default Position
