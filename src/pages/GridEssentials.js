import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function GridEssentials() {
  return (
    <div>
      <div className="container text-white bg-primary fw-light">
        <div className="row">
          <div className="col">
            <h1>Bubbles</h1>
            <p>
              Bubble Gum robot, or “Bubbles” for short, is from a family of
              track-footed robots that ¬originated from an experiment melding
              candy vending machines with robotics in the early 1980s. Bubbles
              is a favorite of Binaryville, not just because she generously
              dispenses candy, but also because she has one of the more "bubbly"
              personalities of the villagers.
            </p>
          </div>
          <div className="col">
            <h1>Rex</h1>
            <p>
              Rex is the Mayor of Binaryville and a well-loved personality in
              town. He rose to robotdom from a microprocessor plant on the south
              side of town, where many famous and influential robots before him
              were conceived.
            </p>
          </div>
          <div className="col">
            <h1>Dolores</h1>
            <p>
              Dolores robot is a computational genius who performs calculations
              for various Binaryville businesses and organizations. In her spare
              time, Dolores has been noodling on the creation of the perfect web
              browser that will make all other browsers obsolete. We're rooting
              for you, Dolores!
            </p>
          </div>
        </div>
      </div>
      <StaticImage
        style={{
          width: "100vw",
          height: "50vh",
          marginBottom: "20px",
          objectFit: "cover",
          objectPosition: "center",
        }}
        src="https://pixelprowess.com/i/robots-camp.png"
        alt="Robots in Camp"
      />
      <div className="container">
        <h4>container</h4>
        <p>
          Chipper and cheery jokes, stories, and songs filled the air this week
          at the 4th Annual Robot Roundup Vintage Camper Rally. While this joke
          doesn’t qualify as the funniest, it’s the first joke I heard when I
          walked up to the Rally’s first bonfire of the week, and was far from
          being the last.
        </p>
      </div>

      <div className="container-sm">
        <h4>container-sm</h4>
        <p>
          Chipper and cheery jokes, stories, and songs filled the air this week
          at the 4th Annual Robot Roundup Vintage Camper Rally. While this joke
          doesn’t qualify as the funniest, it’s the first joke I heard when I
          walked up to the Rally’s first bonfire of the week, and was far from
          being the last.
        </p>
      </div>

      <div className="container-md">
        <h4>container-md</h4>
        <p>
          Chipper and cheery jokes, stories, and songs filled the air this week
          at the 4th Annual Robot Roundup Vintage Camper Rally. While this joke
          doesn’t qualify as the funniest, it’s the first joke I heard when I
          walked up to the Rally’s first bonfire of the week, and was far from
          being the last.
        </p>
      </div>

      <div className="container-lg">
        <h4>container-lg</h4>
        <p>
          Chipper and cheery jokes, stories, and songs filled the air this week
          at the 4th Annual Robot Roundup Vintage Camper Rally. While this joke
          doesn’t qualify as the funniest, it’s the first joke I heard when I
          walked up to the Rally’s first bonfire of the week, and was far from
          being the last.
        </p>
      </div>

      <div className="container-xl">
        <h4>container-xl</h4>
        <p>
          Chipper and cheery jokes, stories, and songs filled the air this week
          at the 4th Annual Robot Roundup Vintage Camper Rally. While this joke
          doesn’t qualify as the funniest, it’s the first joke I heard when I
          walked up to the Rally’s first bonfire of the week, and was far from
          being the last.
        </p>
      </div>

      <div className="container-xxl">
        <h4>container-xxl</h4>
        <p>
          Chipper and cheery jokes, stories, and songs filled the air this week
          at the 4th Annual Robot Roundup Vintage Camper Rally. While this joke
          doesn’t qualify as the funniest, it’s the first joke I heard when I
          walked up to the Rally’s first bonfire of the week, and was far from
          being the last.
        </p>
      </div>

      <div className="container-fluid">
        <h4>container-fluid</h4>
        <p>
          Chipper and cheery jokes, stories, and songs filled the air this week
          at the 4th Annual Robot Roundup Vintage Camper Rally. While this joke
          doesn’t qualify as the funniest, it’s the first joke I heard when I
          walked up to the Rally’s first bonfire of the week, and was far from
          being the last.
        </p>
      </div>
      <hr />

      <div className="position-relative">
        <h1
          className="px-5 text-center d-none vw-100 d-lg-block display-3 text-info fw-bolder position-absolute top-50 start-50 translate-middle"
          style={{
            textShadow: "5px 5px 2px white",
          }}
        >
          The Robot Roundup Vintage Camper Rally Winds Down
        </h1>
        <StaticImage
          className="vw-100"
          src="https://pixelprowess.com/i/robots-camp.png"
          alt="Robots in Camp"
        />
      </div>
      <div className="container mt-3">
        <p>
          Chipper and cheery jokes, stories, and songs filled the air this week
          at the 4th Annual Robot Roundup Vintage Camper Rally. While this joke
          doesn't qualify as the funniest, it's the first joke I heard when I
          walked up to the Rally's first bonfire of the week, and was far from
          being the last.{" "}
        </p>
        <p>
          There were serious topics on the table, too, such as the ethical
          dilemma of integrating robotics into a vintage camper rebuild in order
          to better control interior climate and overall power usage. Purists
          argued that doing things "the old-fashioned human way" was the only
          proper way to camp, and claimed that those who "destroy" the
          authentic-ness of a vintage camper are meanies. It was later
          unanimously decided that no robot in attendance—no matter what their
          vintage camper preference was—wanted to be a meanie. The purists
          reluctantly agreed with the renovators that they were "free spirited
          artists" and stated that there is enough room on the planet for
          whatever a person wants to do to their camper.
        </p>
        <p>
          A growing number of robots were interested in being on the road
          full-time. Social media influencers Plam and Plotter, co-stars of the
          Travel-Worn Robots TubeYou channel, shared their experience and tips
          to transitioning to life on the road. After the session, participants
          were asked to raise a limb to show how many of them were interested in
          living full-time in their camper, and nearly all said they would love
          to be full-timers at least part of the time.
        </p>
        <p>
          In short, the 4th Annual Robot Roundup Vintage Camper Rally has been
          an event to write home about. In fact, I wrote several postcards to my
          family every day—including one that featured my favorite joke of the
          rally:
        </p>
      </div>
    </div>
  )
}

export default GridEssentials
