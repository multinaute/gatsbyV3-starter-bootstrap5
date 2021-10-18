import React from "react"

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
    </div>
  )
}

export default listGroups
