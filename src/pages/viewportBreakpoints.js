import React from "react"

function viewportBreakpoint() {
  return (
    <div>
      <h1 className="text-danger">Viewport Breakpoints</h1>

      <h4 className="text-secondary">Show until Viewport</h4>

      <div className="d-grid gap-2">
        <span className="d-block d-sm-none bg-primary text-white p-2">
          Until xs
        </span>
        <span className="d-block d-md-none bg-success text-white p-2">
          Until md
        </span>
        <span className="d-block d-lg-none bg-danger text-white p-2">
          Until lg
        </span>
        <span className="d-block d-xl-none bg-warning text-white p-2">
          Until xl
        </span>
        <span className="d-block d-xxl-none bg-info text-white p-2">
          Until xxl
        </span>
      </div>

      <hr />
      <h4 className="text-secondary">Show after Viewport</h4>

      <div className="d-grid gap-2">
        <span className="d-none d-sm-block bg-primary text-white p-2">
          Only after xs
        </span>
        <span className="d-none d-md-block bg-success text-white p-2">
          Only after md
        </span>
        <span className="d-none d-lg-block bg-danger text-white p-2">
          Only after lg
        </span>
        <span className="d-none d-xl-block bg-warning text-white p-2">
          Only after xl
        </span>
        <span className="d-none d-xxl-block bg-info text-white p-2">
          Only after xxl
        </span>
      </div>

      <hr />

      <h4 className="text-secondary">Show ONLY in Viewport</h4>

      <div className="d-grid gap-2">
        <span className="d-block d-sm-none bg-secondary text-white p-2">
          Only on sm
        </span>
        <span className="d-none d-sm-block d-md-none bg-primary text-white p-2">
          Only on sm
        </span>
        <span className="d-none d-md-block d-lg-none bg-success text-white p-2">
          Only on md
        </span>
        <span className="d-none d-lg-block d-xl-none bg-danger text-white p-2">
          Only on lg
        </span>
        <span className="d-none d-xl-block d-xxl-none bg-warning text-white p-2">
          Only on xl
        </span>
        <span className="d-none d-xxl-block bg-info text-white p-2">
          Only on xxl
        </span>
      </div>
    </div>
  )
}

export default viewportBreakpoint
