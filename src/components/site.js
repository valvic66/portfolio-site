import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Site = ({ slug, title, demoUrl, codeUrl, description, imageData }) => {
  return (
    <>
      <div>
        <h2>
          <Link to={`/${slug}/`}>{title}</Link>
        </h2>
        <p>{description}</p>
        <ul>
          <li>
            <a href={demoUrl}>Demo Url</a>
          </li>
          <li>
            <a href={codeUrl}>Code Url</a>
          </li>
        </ul>
        <Link to={`/${slug}/`}>
          <GatsbyImage image={imageData} alt={title} />
        </Link>
      </div>
    </>
  )
}

export default Site
