import React from "react"

const widthStyle150 = {
  width: "150px",
}
const widthStyle200 = {
  width: "200px",
}

const paddingStyle10 = {
  padding: "10px",
}

function Display() {
  return (
    <div>
      <h1 className="text-danger">Display Classes</h1>

      <h4 className="text-secondary">d-block</h4>

      <span className="d-block">Rex</span>
      <span className="d-block">Dolores</span>
      <span className="d-block">Bubbles</span>
      <span className="d-block">Fred</span>
      <span className="d-block">Rivet</span>
      <span className="d-block">Eileen</span>

      <hr />

      <h4 className="text-secondary">d-inline</h4>

      <div className="d-inline">Rex</div>
      <div className="d-inline">Dolores</div>
      <div className="d-inline">Bubbles</div>
      <div className="d-inline">Fred</div>
      <div className="d-inline">Rivet</div>
      <div className="d-inline">Eileen</div>

      <hr />

      <h4 className="text-secondary">d-inline-block</h4>

      <div className="d-inline-block" style={widthStyle200}>
        Rex
      </div>
      <div className="d-inline-block" style={widthStyle200}>
        Dolores
      </div>
      <div className="d-inline-block" style={widthStyle200}>
        Bubbles
      </div>
      <div className="d-inline-block" style={widthStyle200}>
        Fred
      </div>
      <div className="d-inline-block" style={widthStyle200}>
        Rivet
      </div>
      <div className="d-inline-block" style={widthStyle200}>
        Eileen
      </div>

      <hr />

      <h4 className="text-secondary">d-grid</h4>

      <div className="gap-1 d-grid">
        <div className="bg-warning" style={paddingStyle10}>
          Rex
        </div>
        <div className="bg-warning" style={paddingStyle10}>
          Dolores
        </div>
        <div className="bg-warning" style={paddingStyle10}>
          Bubbles
        </div>
        <div className="bg-warning" style={paddingStyle10}>
          Fred
        </div>
        <div className="bg-warning" style={paddingStyle10}>
          Rivet
        </div>
        <div className="bg-warning" style={paddingStyle10}>
          Eileen
        </div>
      </div>

      <hr />

      <h4 className="text-secondary">d-table</h4>

      <div className="d-table">
        <div className="d-table-row">
          <div className="d-table-cell bg-info" style={paddingStyle10}>
            Rex
          </div>
          <div className="d-table-cell bg-info" style={paddingStyle10}>
            Dolores
          </div>
          <div className="d-table-cell bg-info" style={paddingStyle10}>
            Bubbles
          </div>
        </div>
        <div className="d-table-row">
          <div className="d-table-cell bg-info" style={paddingStyle10}>
            Fred
          </div>
          <div className="d-table-cell bg-info" style={paddingStyle10}>
            Rivet
          </div>
          <div className="d-table-cell bg-info" style={paddingStyle10}>
            Eileen
          </div>
        </div>
      </div>

      <hr />

      <h4 className="text-secondary">d-flex</h4>

      <div className="d-flex">
        <div style={widthStyle150}>Rex</div>
        <div style={widthStyle150}>Dolores</div>
        <div style={widthStyle150}>Bubbles</div>
      </div>
      <div className="d-flex">
        <div style={widthStyle150}>Fred</div>
        <div style={widthStyle150}>Rivet</div>
        <div style={widthStyle150}>Eileen</div>
      </div>

      <hr />

      <h4 className="text-secondary">d-inline-flex</h4>

      <div className="d-inline-flex">
        <div style={widthStyle150}>Rex</div>
        <div style={widthStyle150}>Dolores</div>
        <div style={widthStyle150}>Bubbles</div>
      </div>
      <div className="d-inline-flex">
        <div style={widthStyle150}>Fred</div>
        <div style={widthStyle150}>Rivet</div>
        <div style={widthStyle150}>Eileen</div>
      </div>

      <hr />
    </div>
  )
}

export default Display
