import React from "react"
import marked from "marked"

const Excerpt = props => {
  const markedExcerpt = marked(props.excerpt)
  return (
            <p
              className="job--excerpt"
              dangerouslySetInnerHTML={{ __html: markedExcerpt }}
            />
  )
}

export default Excerpt
