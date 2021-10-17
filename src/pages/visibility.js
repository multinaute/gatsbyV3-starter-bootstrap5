import React from "react"

function Visibility() {
  return (
    <div>
      <h1 className="text-danger">Invisible</h1>

      <div className="d-flex">
        <div className="bg-secondary text-white p-2">Rex</div>
        <div className="invisible bg-success text-white p-2">Dolores</div>
        <div className="bg-secondary text-white p-2">Bubbles</div>
        <div className="bg-secondary text-white p-2">Fred</div>
        <div className="bg-secondary text-white p-2 invisible">Rivet</div>
      </div>
    </div>
  )
}

export default Visibility
