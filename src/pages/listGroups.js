import React from "react"
import { Link } from "gatsby"

function listGroups() {
  return (
    <div>
      <h1 className="text-danger">List Group</h1>

      <h4>What robots can do better than you.</h4>
      <ul className="list-group">
        <li className="list-group-item active" ariaCurrent="true">
          Space travel and exploration
        </li>
        <li
          className="list-group-item disabled"
          tabindex="-1"
          ariaDisabled="true"
        >
          Superfast mass production
        </li>
        <li className="list-group-item">Intricate surgery</li>
        <li className="list-group-item">Flipping pancakes</li>
        <li className="list-group-item">Packing suitcases</li>
      </ul>
      <hr />
      <h1 className="text-danger">Flush List Group</h1>

      <h4>What robots can do better than you.</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item active" ariaCurrent="true">
          Space travel and exploration
        </li>
        <li
          className="list-group-item disabled"
          tabindex="-1"
          ariaDisabled="true"
        >
          Superfast mass production
        </li>
        <li className="list-group-item">Intricate surgery</li>
        <li className="list-group-item">Flipping pancakes</li>
        <li className="list-group-item">Packing suitcases</li>
      </ul>
      <hr />
      <h1 className="text-danger">List Group Item Action</h1>

      <h4>What robots can do better than you.</h4>
      <div className="list-group">
        <button className="list-group-item list-group-item-action">
          Space travel and exploration
        </button>
        <Link className="list-group-item list-group-item-action">
          Superfast mass production
        </Link>
        <Link className="list-group-item list-group-item-action">
          Intricate surgery
        </Link>
        <button className="list-group-item list-group-item-action">
          Flipping pancakes
        </button>
        <button className="list-group-item list-group-item-action">
          Packing suitcases
        </button>
      </div>
      <hr />
      <h1 className="text-danger">Horizontal List Group</h1>

      <h4>What robots can do better than you.</h4>
      <ul className="list-group list-group-horizontal-md">
        <li className="list-group-item">Space travel and exploration</li>
        <li className="list-group-item">Superfast mass production</li>
        <li className="list-group-item">Intricate surgery</li>
        <li className="list-group-item">Flipping pancakes</li>
      </ul>
      <hr />
      <h1 className="text-danger">Contextual List Group Classes</h1>

      <h4>What robots can do better than you.</h4>
      <ul className="list-group">
        <li className="list-group-item list-group-item-primary">
          Space travel and exploration
        </li>
        <li className="list-group-item list-group-item-secondary">
          Superfast mass production
        </li>
        <li className="list-group-item list-group-item-success">
          Intricate surgery
        </li>
        <li className="list-group-item list-group-item-danger">
          Flipping pancakes
        </li>
        <li className="list-group-item list-group-item-warning">
          Packing suitcases
        </li>
        <li className="list-group-item list-group-item-info">
          Space travel and exploration
        </li>
        <li className="list-group-item list-group-item-light">
          Superfast mass production
        </li>
        <li className="list-group-item list-group-item-dark">
          Intricate surgery
        </li>
      </ul>
    </div>
  )
}

export default listGroups
