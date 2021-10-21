import React from "react"

function flexbox() {
  return (
    <div>
      <div className="container">
        <h1 className="mt-4 mb-2">Diplay Flex</h1>

        <h4 className="text-secondary">d-flex</h4>
        <div className="d-block d-md-flex">
          <div className="p-2 border">Rex</div>
          <div className="p-2 border">Dolores</div>
          <div className="p-2 border">Bubbles</div>
        </div>
        <div className="d-block d-md-flex">
          <div className="p-2 border">Fred</div>
          <div className="p-2 border">Rivet</div>
          <div className="p-2 border">Eileen</div>
        </div>

        <hr />

        <h4 className="text-secondary">d-inline-flex</h4>

        <div className="d-block d-md-inline-flex">
          <div className="p-2 border">Rex</div>
          <div className="p-2 border">Dolores</div>
          <div className="p-2 border">Bubbles</div>
        </div>
        <div className="d-block d-md-inline-flex">
          <div className="p-2 border">Fred</div>
          <div className="p-2 border">Rivet</div>
          <div className="p-2 border">Eileen</div>
        </div>
      </div>

      <hr />

      <div className="container">
        <h1 className="mt-4 mb-2">Diplay Flex</h1>

        <h4 className="text-secondary">flex-row</h4>
        <div className="d-flex flex-md-row">
          <div className="p-2 border">Rex</div>
          <div className="p-2 border">Dolores</div>
          <div className="p-2 border">Bubbles</div>
        </div>

        <hr />

        <h4 className="text-secondary">flex-row-reverse</h4>
        <div className="d-flex flex-md-row-reverse">
          <div className="p-2 border">Rex</div>
          <div className="p-2 border">Dolores</div>
          <div className="p-2 border">Bubbles</div>
        </div>

        <hr />

        <h4 className="text-secondary">flex-column</h4>
        <div className="d-flex flex-md-column">
          <div className="p-2 border">Rex</div>
          <div className="p-2 border">Dolores</div>
          <div className="p-2 border">Bubbles</div>
        </div>
        <hr />

        <h4 className="text-secondary">flex-column-reverse</h4>
        <div className="d-flex flex-md-column-reverse">
          <div className="p-2 border">Rex</div>
          <div className="p-2 border">Dolores</div>
          <div className="p-2 border">Bubbles</div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default flexbox
