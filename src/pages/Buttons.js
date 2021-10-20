import React from "react"
import { Link } from "gatsby"

function Buttons() {
  return (
    <div>
      <div className="container">
        <h1 className="mt-4 mb-2">Contextual Links</h1>

        <h4 className="text-secondary">contextual</h4>
        <button type="button" className="btn btn-primary">
          primary
        </button>
        <button type="button" className="btn btn-secondary">
          secondary
        </button>
        <button type="button" className="btn btn-success">
          success
        </button>
        <button type="button" className="btn btn-danger">
          danger
        </button>
        <button type="button" className="btn btn-warning">
          warning
        </button>
        <button type="button" className="btn btn-info">
          info
        </button>
        <button type="button" className="btn btn-light">
          light
        </button>
        <button type="button" className="btn btn-dark">
          dark
        </button>
        <button type="button" className="btn btn-link">
          link
        </button>

        <hr />

        <h4 className="text-secondary">a</h4>
        <Link role="button" className="btn btn-primary">
          primary
        </Link>
        <Link role="button" className="btn btn-secondary">
          secondary
        </Link>
        <Link role="button" className="btn btn-success">
          success
        </Link>
        <Link role="button" className="btn btn-danger">
          danger
        </Link>
        <Link role="button" className="btn btn-warning">
          warning
        </Link>
        <Link role="button" className="btn btn-info">
          info
        </Link>
        <Link role="button" className="btn btn-light">
          light
        </Link>
        <Link role="button" className="btn btn-dark">
          dark
        </Link>
        <Link role="button" className="btn btn-link">
          link
        </Link>

        <hr />

        <h4 className="text-secondary">input</h4>
        <input type="button" className="btn btn-primary" value="primary" />
        <input type="button" className="btn btn-secondary" value="secondary" />
        <input type="button" className="btn btn-success" value="success" />
        <input type="button" className="btn btn-danger" value="danger" />
        <input type="button" className="btn btn-warning" value="warning" />
        <input type="button" className="btn btn-info" value="info" />
        <input type="button" className="btn btn-light" value="light" />
        <input type="button" className="btn btn-dark" value="dark" />
        <input type="button" className="btn btn-link" value="link" />

        <hr />

        <h4 className="text-secondary">outline</h4>
        <button type="button" className="btn btn-outline-primary">
          primary
        </button>
        <button type="button" className="btn btn-outline-secondary">
          secondary
        </button>
        <button type="button" className="btn btn-outline-success">
          success
        </button>
        <button type="button" className="btn btn-outline-danger">
          danger
        </button>
        <button type="button" className="btn btn-outline-warning">
          warning
        </button>
        <button type="button" className="btn btn-outline-info">
          info
        </button>
        <button type="button" className="btn btn-outline-light">
          light
        </button>
        <button type="button" className="btn btn-outline-dark">
          dark
        </button>
      </div>
      <hr />
      <div className="container">
        <h1 className="mt-4 mb-2">Sizing</h1>
        <button type="button" className="btn btn-sm btn-secondary">
          Dolores
        </button>
        <button type="button" className="btn btn-success">
          Dolores
        </button>
        <button type="button" className="btn btn-lg btn-secondary">
          Dolores
        </button>
      </div>
      <hr />

      <div className="container">
        <h1 className="mt-4 mb-2">Button Groups</h1>

        <h4 className="text-secondary">btn-group</h4>
        <div className="btn-group" role="group" aria-label="Robot Buttons">
          <button type="button" className="btn btn-outline-success">
            Dolores
          </button>
          <button type="button" className="btn btn-outline-success active">
            Bubbles
          </button>
          <button type="button" className="btn btn-outline-success">
            Cosmo
          </button>
        </div>

        <hr />

        <h4 className="text-secondary">btn-group-vertical</h4>
        <div
          className="btn-group-vertical"
          role="group"
          aria-label="Robot Buttons"
        >
          <button type="button" className="btn btn-primary">
            Dolores
          </button>
          <button type="button" className="btn btn-primary active">
            Bubbles
          </button>
          <button type="button" className="btn btn-primary">
            Cosmo
          </button>
        </div>

        <hr />

        <h1 className="mt-4 mb-2">Variations</h1>

        <h4 className="text-secondary">btn-group-sm</h4>
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Robot Buttons"
        >
          <button type="button" className="btn btn-warning">
            Dolores
          </button>
          <button type="button" className="btn btn-warning active">
            Bubbles
          </button>
          <button type="button" className="btn btn-warning">
            Cosmo
          </button>
        </div>

        <hr />

        <h4 className="text-secondary">btn-group-lg</h4>
        <div
          className="btn-group-vertical btn-group-lg"
          role="group"
          aria-label="Robot Buttons"
        >
          <button type="button" className="btn btn-outline-danger">
            Dolores
          </button>
          <button type="button" className="btn btn-outline-danger active">
            Bubbles
          </button>
          <button type="button" className="btn btn-outline-danger">
            Cosmo
          </button>
        </div>

        <hr />

        <h1 className="mt-4 mb-2">btn-check</h1>

        <h4 className="text-secondary">with checkboxes</h4>
        <div className="btn-group" role="group" aria-label="Robot toggle group">
          <input
            type="checkbox"
            className="btn-check"
            id="dolores_ck"
            autocomplete="off"
          />
          <label className="btn btn-outline-info" htmlFor="dolores_ck">
            Dolores
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="bubbles_ck"
            autocomplete="off"
            checked
          />
          <label className="btn btn-outline-info" htmlFor="bubbles_ck">
            Bubbles
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="cosmo_ck"
            autocomplete="off"
          />
          <label className="btn btn-outline-info" htmlFor="cosmo_ck">
            Cosmo
          </label>
        </div>

        <hr />

        <h4 className="text-secondary">with radio</h4>
        <div
          className="btn-group-vertical"
          role="group"
          aria-label="Robot toggle group"
        >
          <input
            type="radio"
            className="btn-check"
            name="choose_robot"
            id="choice_dolores"
            autocomplete="off"
          />
          <label className="btn btn-success" htmlFor="choice_dolores">
            Dolores
          </label>

          <input
            type="radio"
            className="btn-check"
            name="choose_robot"
            id="choice_bubbles"
            autocomplete="off"
            checked
          />
          <label className="btn btn-success" htmlFor="choice_bubbles">
            Bubbles
          </label>

          <input
            type="radio"
            className="btn-check"
            name="choose_robot"
            id="choice_cosmo"
            autocomplete="off"
          />
          <label className="btn btn-success" htmlFor="choice_cosmo">
            Cosmo
          </label>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Buttons
