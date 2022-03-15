import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Site = ({ slug, title, demoUrl, codeUrl, description, imageData }) => {
  return (
    <>
      <div>
        <p>{`/${slug}`}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          <li>
            <a href={demoUrl}>Demo Url</a>
          </li>
          <li>
            <a href={codeUrl}>Code Url</a>
          </li>
        </ul>
        <GatsbyImage image={imageData} alt={title} />
      </div>
    </>
  )
}

export default Site
