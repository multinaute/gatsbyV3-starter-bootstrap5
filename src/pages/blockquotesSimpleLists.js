import React from "react"

function blockquotesSimpleLists() {
  return (
    <div>
      <h1 className="text-info">Blockquotes</h1>

      <hr />

      <h3 className="text-secondary">Without className</h3>
      <blockquote>
        I just want to absorb knowledge and skills like a vacuum cleaner.
      </blockquote>

      <hr />

      <h3 className="text-secondary">Blockquote className</h3>
      <blockquote className="blockquote">
        I just want to absorb knowledge and skills like a vacuum cleaner.
      </blockquote>

      <hr />

      <h3 className="text-secondary">Footer with Figure</h3>

      <figure>
        <blockquote className="blockquote">
          To make robots practical, flaws must be removed. To make robots
          endearing, flaws must be added.
        </blockquote>
        <figcaption className="blockquote-footer">
          Khang Kijarro Nguyen
        </figcaption>
      </figure>

      <hr />

      <h3 className="text-secondary">Blockquote className</h3>

      <figure className="text-end">
        <blockquote className="blockquote">
          I rarely use oxygen myself, sir. It promotes rust.
        </blockquote>
        <figcaption className="blockquote-footer">Robby the Robot</figcaption>
      </figure>
    </div>
  )
}

export default blockquotesSimpleLists
