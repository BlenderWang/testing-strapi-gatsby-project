import React from "react"
import Title from "./Title"
import Paragraph from "./Paragraph"

export default function Value(props) {
  const value = props.value

  return (
    <div className="value">
      <i className={`fas ${value.icon}`} />
      <Title subtitle={value.name} />
      <Paragraph paragraph={value.description} />
    </div>
  )
}
