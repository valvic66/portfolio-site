import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Image } from "gatsby-image"

const Site = ({ slug, title, demoUrl, codeUrl, description, imageData }) => {
  console.log(title, description, imageData)
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
        {/* <StaticImage alt={title} fluid={imageData} /> */}
        <Image alt={title} fluid={imageData} />
      </div>
    </>
  )
}

export default Site
