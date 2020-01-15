import React, { Component } from "react"
import NavHeader from "./NavHeader"
import Excerpt from "./Excerpt"
import FullDesc from "./FullDesc"
import Link from './Link'

class JobsPage extends Component {
  state = {
    jobs: [
      {
        id: 0,
        count: 1,
        title: 'Job #1',
        excerpt: 'lorem ipsum',
        description: ''
      },
      {
        id: 1,
        count: 2,
        title: 'Job #2',
        excerpt: 'lorem ipsum',
        description: ''
      },
      {
        id: 2,
        count: 3,
        title: 'Job #3',
        excerpt: 'lorem ipsum',
        description: ''
      }
    ]
  }
  render() {
    const { jobs } = this.state

    return (
      <div className='container'>
        <NavHeader />
        <div style={{ background: `#212529` }}>
            <div className="job--heading">
              <h2>Join our team</h2>
              <p>Welcome to our job board</p>
            </div>
        </div>
        <ul
          style={{
            marginTop: `15%`,
            marginLeft: 0,
            marginBottom: `1.45rem`,
            marginRight: 0,
            padding: 0,
            listStyle: `none`,
            overflow: `hidden`,
          }}
        >
          {jobs.map(job => (
            <li className="job" key={job.id}>
              <div className="count">
                <em>#{job.count}</em>
              </div>
              <h2 className="job--title">{job.title}</h2>
              <Excerpt excerpt={job.node.excerpt} />
              <FullDesc fullDesc={job.node.description} />
            </li>
          ))}
        </ul>
        <Link style={{ marginLeft: "10vw" }} page="/">
          &#8592; Go back to the homepage
        </Link>
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            marginTop: `5.8rem`,
          }}
        >
          © {new Date().getFullYear()}, Flax Innovations | Built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            style={{ fontSize: `12px`, margin: `0 3px` }}
          >
            Gatsby
          </a>{" "}
          &{" "}
          <a
            href="https://strapi.io"
            style={{ fontSize: `12px`, margin: `0 3px` }}
          >
            Strapi
          </a>
        </div>
      </div>
    )
  }
}

export default JobsPage

