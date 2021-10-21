import React from "react"

function columns() {
  return (
    <div className="px-5 mt-4 container-fluid lh-sm fw-light">
      <h2 className="mt-4 mb-2">Different Sizes</h2>
      <div className="row">
        <div className="col-3">
          <div className="p-3 border">
            <h4 className="mb-0 text-secondary">Robotesque</h4>
            <p className="mb-0">
              Considered ahead of their time, Robotesqué is known for combining
              class and sportiness for young-at-artificial-heart androids.
            </p>
          </div>
        </div>
        <div className="col col-9">
          <div className="p-3 border">
            <h4 className="mb-0 text-secondary">Denimomatic</h4>
            <p className="mb-0">
              Launched as a brand for the robots that worked in the auto
              industry, Denimomatic still signifies hard work and good looks for
              all ages.
            </p>
          </div>
        </div>
      </div>

      <h2 className="mt-4 mb-2">Same Sizes</h2>
      <div className="row">
        <div className="col-6">
          <div className="p-3 border">
            <h4 className="mb-0 text-secondary">Robotesque</h4>
            <p className="mb-0">
              Considered ahead of their time, Robotesqué is known for combining
              class and sportiness for young-at-artificial-heart androids.
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 border">
            <h4 className="mb-0 text-secondary">Denimomatic</h4>
            <p className="mb-0">
              Launched as a brand for the robots that worked in the auto
              industry, Denimomatic still signifies hard work and good looks for
              all ages.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="px-5 mt-4 container-fluid lh-sm fw-light">
        <h2 className="mt-4 mb-2">Ordering Classes</h2>
        <div className="row">
          <div className="col-6 col-lg-3 order-xl-2">
            <div className="p-3 border">
              <h4 className="mb-0 text-secondary">Robotesque</h4>
              <p className="mb-0">
                Considered ahead of their time, Robotesqué is known for
                combining class and sportiness for young-at-artificial-heart
                androids.
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-9 order-xl-1">
            <div className="p-3 border">
              <h4 className="mb-0 text-secondary">Denimomatic</h4>
              <p className="mb-0">
                Launched as a brand for the robots that worked in the auto
                industry, Denimomatic still signifies hard work and good looks
                for all ages.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="px-5 mt-4 container-fluid lh-sm fw-light">
        <h2 className="mt-4 mb-2">Offset Classes</h2>
        <div className="row">
          <div className="offset-2 col-3">
            <div className="p-3 border">
              <h4 className="mb-0 text-secondary">Robot</h4>
              <p className="mb-0">
                Considered ahead of their time, Robotesqué is known for
                combining class and sportiness for young-at-artificial-heart
                androids.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 border">
              <h4 className="mb-0 text-secondary">Denimomatic</h4>
              <p className="mb-0">
                Launched as a brand for the robots that worked in the auto
                industry, Denimomatic still signifies hard work and good looks
                for all ages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default columns
