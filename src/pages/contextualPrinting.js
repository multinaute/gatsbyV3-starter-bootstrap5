import React from "react"

function contextualPrinting() {
  return (
    <div>
      <h1>Viewport Breakpoints</h1>

      <div className="d-grid gap-2">
        <span className="d-print-none bg-secondary text-white p-2">
          DON'T PRINT
        </span>
        <span className="d-none d-print-block bg-secondary text-white p-2">
          PRINT AS BLOCK
        </span>
        <span className="d-none d-lg-block d-print-block bg-secondary text-white p-2">
          SHOW LARGE, PRINT BLOCK
        </span>
      </div>
    </div>
  )
}

export default contextualPrinting
