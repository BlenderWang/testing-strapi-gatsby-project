import React, { Component } from "react"
import Title from "./Title"
import Paragraph from "./Paragraph"
import Form from "./Form"

export default class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="contact-heading">
          <Title subtitle={"contact"} />
          <Paragraph paragraph={`Curious? Let's talk!`} />
        </div>
        <div className="contact--icons">
          <i className="fas fa-at"></i>
          <Paragraph paragraph={"shirleywang527@gmail.com"} />
          <i className="fas fa-phone-alt"></i>
          <Paragraph paragraph={"+46 765 838 373"} />
        </div>
        <Form />
      </div>
    )
  }
}
