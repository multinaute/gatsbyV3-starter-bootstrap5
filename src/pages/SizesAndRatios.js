import React from "react"

function SizesAndRatios() {
  return (
    <div>
      <h1>Widths</h1>

      <div className="bg-dark">
        <div className="p-2 text-white w-25 bg-primary">w-25</div>
        <div className="p-2 text-white w-50 bg-success">w-50</div>
        <div className="p-2 text-white w-75 bg-warning">w-75</div>
        <div className="p-2 text-white w-100 bg-danger">w-100</div>
        <div className="w-auto p-2 text-white bg-info">w-auto</div>
        <div
          style={{ width: "500px" }}
          className="p-2 text-white mw-100 bg-secondary"
        >
          mw-100
        </div>
      </div>
      <div className="p-2 text-white vw-100 bg-secondary">vw-100</div>
      <hr />
      <h1 className="text-info">Heights</h1>

      <div className="p-2 bg-dark vh-100">
        <div className="p-2 text-white h-25 d-inline-block bg-primary">
          w-25
        </div>
        <div className="p-2 text-white h-50 d-inline-block bg-success">
          h-50
        </div>
        <div className="p-2 text-white h-75 d-inline-block bg-warning">
          h-75
        </div>
        <div className="p-2 text-white h-100 d-inline-block bg-danger">
          h-100
        </div>
        <div className="h-auto p-2 text-white d-inline-block bg-info">
          h-auto
        </div>
        <div
          style={{ height: "500px" }}
          className="p-2 text-white mh-100 d-inline-block bg-secondary"
        >
          mh-100
        </div>
      </div>
      <hr />
      <h1>Ratios</h1>

      <h4 className="text-secondary">Normal</h4>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TLb0FyS2p2c"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <hr />

      <h4 className="text-secondary">ratio-1x1</h4>

      <div className="ratio ratio-1x1">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TLb0FyS2p2c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <hr />

      <h4 className="text-secondary">ratio-4x3</h4>

      <div className="ratio ratio-4x3">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TLb0FyS2p2c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <hr />

      <h4 className="text-secondary">ratio-16x9</h4>

      <div className="ratio ratio-16x9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TLb0FyS2p2c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <hr />

      <h4 className="text-secondary">ratio-21x9</h4>

      <div className="ratio ratio-21x9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TLb0FyS2p2c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default SizesAndRatios
