import React from "react"

function Spacing() {
  return (
    <div>
      <h1 classNameName="text-danger">Margin</h1>
      <hr />
      <h4 className="text-secondary">Margin</h4>
      <div className="bg-warning d-inline-block">
        <div className="m-1 p-2 d-inline-block bg-secondary text-white">
          Rex
        </div>
      </div>
      <div className="bg-warning d-inline-block">
        <div className="m-2 p-2 d-inline-block bg-secondary text-white">
          Rex
        </div>
      </div>
      <div className="bg-warning d-inline-block">
        <div className="m-3 p-2 d-inline-block bg-secondary text-white">
          Rex
        </div>
      </div>
      <div className="bg-warning d-inline-block">
        <div className="m-4 p-2 d-inline-block bg-secondary text-white">
          Rex
        </div>
      </div>
      <div className="bg-warning d-inline-block">
        <div className="m-5 p-2 d-inline-block bg-secondary text-white">
          Rex
        </div>
      </div>
      <hr />
      <h4 className="text-secondary">Margin Sides</h4>
      <div className="bg-warning d-inline-block">
        <div className="mt-3 p-2 d-inline-block bg-secondary text-white">
          Rex
        </div>
      </div>
      <div className="bg-warning d-inline-block">
        <div className="me-3 p-2 d-inline-block bg-secondary text-white">
          Rex
        </div>
      </div>
      <div className="bg-warning d-inline-block">
        <div className="mb-3 p-2 d-inline-block bg-secondary text-white">
          Rex
        </div>
      </div>
      <div className="bg-warning d-inline-block">
        <div className="ms-3 p-2 d-inline-block bg-secondary text-white">
          Rex
        </div>
      </div>
      <div className="bg-warning d-inline-block">
        <div className="mx-3 p-2 d-inline-block bg-secondary text-white">
          Rex
        </div>
      </div>
      <div className="bg-warning d-inline-block">
        <div className="my-3 p-2 d-inline-block bg-secondary text-white">
          Rex
        </div>
      </div>
      <hr />
      <h4 className="text-secondary">Auto</h4>
      <div className="mt-3 bg-warning w-100">
        <div
          style={{ width: "300px" }}
          className="mx-auto p-2 d-block bg-secondary text-white"
        >
          Rex
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Spacing
