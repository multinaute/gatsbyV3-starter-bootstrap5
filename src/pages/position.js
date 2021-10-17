import React from "react"

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

      <div className="d-grid gap-2 bg-dark" style={paddingStyle}>
        <div className="bg-secondary text-white p-2" style={heightStyle}>
          Rex
        </div>
        <div className="bg-danger text-white p-2" style={heightStyle}>
          Dolores
        </div>
        <div className="bg-secondary text-white p-2" style={heightStyle}>
          Bubbles
        </div>
        <div className="bg-secondary text-white p-2" style={heightStyle}>
          Fred
        </div>
        <div className="bg-secondary text-white p-2" style={heightStyle}>
          Rivet
        </div>
      </div>

      <hr />

      <div className="d-grid gap-2 bg-dark" style={paddingStyle}>
        <div className="bg-secondary text-white p-2" style={heightStyle}>
          Rex
        </div>
        <div className="bg-secondary text-white p-2" style={heightStyle}>
          Dolores
        </div>
        <div className="bg-secondary text-white p-2" style={heightStyle}>
          Bubbles
        </div>
        <div className="bg-secondary text-white p-2" style={heightStyle}>
          Fred
        </div>
        <div className="bg-secondary text-white p-2" style={heightStyle}>
          Rivet
        </div>
      </div>
    </div>
  )
}

export default Position
