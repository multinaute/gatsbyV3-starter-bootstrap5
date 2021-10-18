import React from "react"
import { Link } from "gatsby"

function FontSizes() {
  return (
    <div>
      <h1 className="text-info">Font Sizes</h1>

      <hr />

      <h3 className="text-danger">Headlines</h3>

      <div className="h1">Rex</div>
      <div className="h2">Dolores</div>
      <div className="h3">Bubbles</div>
      <div className="h4">Fred</div>
      <div className="h5">Rivet</div>
      <div className="h6">Eileen</div>

      <hr />

      <h3 className="text-danger">Font Size</h3>

      <div className="fs-1">Rex</div>
      <div className="fs-2">Dolores</div>
      <div className="fs-3">Bubbles</div>
      <div className="fs-4">Fred</div>
      <div className="fs-5">Rivet</div>
      <div className="fs-6">Eileen</div>

      <hr />

      <h3 className="text-danger">Display</h3>

      <div className="display-1">Rex</div>
      <div className="display-2">Dolores</div>
      <div className="display-3">Bubbles</div>
      <div className="display-4">Fred</div>
      <div className="display-5">Rivet</div>
      <div className="display-6">Eileen</div>

      <hr />

      <h3 className="text-danger">Lead</h3>

      <p className="lead">
        While robots have evolved to be able to do pretty much anything, most
        androids and bots work in the construction and manufacturing field as
        force multipliers. As experts in lifting, moving, and nuts-and-bolting,
        the robotic population is an ideal match for industry and repetitive
        tasks. As they say in the trades, there’s nothing as fun as ennui! And
        that’s why we strive for our employees to have the most tedious
        occupations in the world. Are you ready to join us?
      </p>
      <p>
        Mind Numbing Products is a force in the manufacturing and production
        market, having produced and manufactured nearly every kind of product
        ever. Our motto is If it’s not Mind Numbing, it’s not worth it.
      </p>
      <p>
        This year, the Binaryville Medallion of Honor will be presented to our
        very own Rivet for his tireless disaster relief work in collusion with
        The Ultimate Robot Disaster Relief Organized Organization, TURDROO
        [tooltip: pronounced ‘TUR-drew’]. Despite his chr/onic alektorophobia
        [tooltip: fear of chickens], Rivet has also gone beyond binary
        boundaries, dedicating every Thursday afternoon to egg-sitting for
        neighborhood fowl as they foray into town for grain and karaoke.{" "}
      </p>

      <h1 className="text-info">Line Height</h1>

      <h3 className="text-secondary">lh-1</h3>
      <p className="lh-1">
        While robots have evolved to be able to do pretty much anything, most
        androids and bots work in the construction and manufacturing field as
        force multipliers. As experts in lifting, moving, and nuts-and-bolting,
        the robotic population is an ideal match for industry and repetitive
        tasks.
      </p>

      <hr />

      <h3 className="text-secondary">lh-sm</h3>
      <p className="lh-sm">
        While robots have evolved to be able to do pretty much anything, most
        androids and bots work in the construction and manufacturing field as
        force multipliers. As experts in lifting, moving, and nuts-and-bolting,
        the robotic population is an ideal match for industry and repetitive
        tasks.
      </p>

      <hr />

      <h3 className="text-secondary">lh-base</h3>
      <p className="lh-base">
        While robots have evolved to be able to do pretty much anything, most
        androids and bots work in the construction and manufacturing field as
        force multipliers. As experts in lifting, moving, and nuts-and-bolting,
        the robotic population is an ideal match for industry and repetitive
        tasks.
      </p>

      <hr />

      <h3 className="text-secondary">lh-lg</h3>
      <p className="lh-lg">
        While robots have evolved to be able to do pretty much anything, most
        androids and bots work in the construction and manufacturing field as
        force multipliers. As experts in lifting, moving, and nuts-and-bolting,
        the robotic population is an ideal match for industry and repetitive
        tasks.
      </p>

      <hr />

      <h1 className="text-danger">Font Weight</h1>

      <h2 className="fw-lighter">Rex</h2>
      <h2 className="fw-light">Dolores</h2>
      <h2 className="fw-normal">Bubbles</h2>
      <h2 className="fw-bold">Fred</h2>
      <h2 className="fw-bolder">Rivet</h2>

      <hr />

      <h1 className="text-danger">Font Style</h1>

      <div className="fst-italic fs-2">Rex</div>
      <div className="fst-normal fs-2">Dolores</div>

      <hr />
      <h1 className="text-info">Text Decoration</h1>

      <h3 className="text-secondary">text-decoration-underline</h3>
      <p className="text-decoration-underline">
        While robots have evolved to be able to do pretty much anything, most
        androids and bots work in the construction and manufacturing field as
        force multipliers.
      </p>

      <hr />

      <h3 className="text-secondary">text-decoration-line-through</h3>
      <p className="text-decoration-line-through">
        While robots have evolved to be able to do pretty much anything, most
        androids and bots work in the construction and manufacturing field as
        force multipliers.
      </p>

      <hr />

      <h3 className="text-secondary">text-decoration-none</h3>
      <Link to="#" className="text-decoration-none">
        While robots have evolved to be able to do pretty much anything, most
        androids and bots work in the construction and manufacturing field as
        force multipliers.
      </Link>
    </div>
  )
}

export default FontSizes
