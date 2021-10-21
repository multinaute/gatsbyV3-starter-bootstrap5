import React from "react"
import { Link } from "gatsby"

function navBar() {
  return (
    <div>
      <h1 className="container mt-4 mb-2">Navbar</h1>

      <h4 className="container text-secondary">
        Basic, Using Lists, Light Background
      </h4>

      <nav className="navbar navbar-expand-lg bg-warning navbar-light">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Bubbles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Cosmo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Dolores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Fred
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Levi
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <hr />

      <h4 className="container text-secondary">
        Expands on LG, dark background, container-fluid, anchor tags
      </h4>

      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
        <div className="container-fluid">
          <div className="navbar-nav">
            <Link
              className="nav-item nav-link active"
              aria-current="page"
              to="#"
            >
              Bubbles
            </Link>
            <Link className="nav-item nav-link" to="#">
              Cosmo
            </Link>
            <Link className="nav-item nav-link" to="#">
              Dolores
            </Link>
            <Link className="nav-item nav-link" to="#">
              Fred
            </Link>
            <Link
              className="nav-item nav-link disabled"
              to="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Levi
            </Link>
          </div>
        </div>
      </nav>

      <hr />
    </div>
  )
}

export default navBar
