import React from "react"
import { Link } from "gatsby"
import { FaMap } from "react-icons/fa"

const paragraphStyle = {
  color: "var(--bs-purple)",
}

function About() {
  return (
    <div>
      <Link to="/" className="link-warning">
        Home text-primary
      </Link>
      <p style={paragraphStyle}>paragraphStyle color purple</p>
      <p style={{ color: "var(--bs-indigo)" }}>var(--bs-indigo) color indigo</p>
      <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
        <FaMap className="me-2" />
        Primary button
      </button>
      <button type="button" className="btn btn-secondary py-4">
        <FaMap className="me-2" />
        Secondary button
      </button>
    </div>
  )
}

export default About
