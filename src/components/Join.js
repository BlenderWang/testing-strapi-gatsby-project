import React from "react"
import Title from "./Title"
import Paragraph from "./Paragraph"
import Link from "./Link"
import Button from "./Button"

export default function Join() {
  return (
    <div className="join" id="career">
      <Title subtitle={"Join us"} />
      <div className="divi-line divi--left"></div>
        <Paragraph
          paragraph={"Would you like to share this adventure?"}
        />
      <Link page="/page-jobs" className="link link-btn">
        <Button btnTxt={'learn more'} />
      </Link>
      <div className="divi-line divi--right"></div>
    </div>
  )
}
