import React, { Component } from "react"
import Title from "./Title"
import Paragraph from "./Paragraph"
import Values from "./Values"

export default class About extends Component {
  state = {
    values: [
      {
        id: 0,
        icon: "fa-ice-cream",
        name: "Color",
        description:
          "Brownie topping liquorice. I love chocolate bar cookie jelly-o donut halvah. Chupa chups chocolate bar carrot cake bear claw carrot cake donut.",
      },
      {
        id: 1,
        icon: "fa-heart",
        name: "Smell",
        description: "Donut wafer cheesecake icing wafer halvah.",
      },
      {
        id: 2,
        icon: "fa-cookie-bite",
        name: "Flavor",
        description:
          "I love carrot cake I love icing bonbon. Cotton candy jelly-o wafer biscuit chupa chups toffee fruitcake I love dragée. ",
      },
      {
        id: 3,
        icon: "fa-birthday-cake",
        name: "Size",
        description:
          "Jelly tart lemon drops dragée brownie candy sesame snaps cake. Brownie sweet marzipan bear claw.",
      },
    ],
  }
  render() {
    return (
      <div className="about" id="about">
        <Title subtitle={"about"} />
        <Paragraph
          paragraph={
            "Bonbon sesame snaps candy icing gummies. Gingerbread chupa chups gingerbread candy canes. Marzipan I love muffin lemon drops gummies macaroon wafer tart."
          }
        />
      <div className="divi-line"></div>
        <Title subtitle={"values"} />
        <Values values={this.state.values} />
      </div>
    )
  }
}
