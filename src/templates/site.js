import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { getImage } from "gatsby-plugin-image"
import Site from "../components/site"
import './site.css';

export const query = graphql`
  query ($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      code_url
      demo_url
      description
      image {
        childImageSharp {
          gatsbyImageData(width: 1024)
        }
      }
    }
  }
`

const SiteTemplate = ({ data }) => {
  const site = data.projectsJson
  const { title, demo_url, code_url, description, image } = site
  const img = getImage(image)

  const siteProps = {
    imageData: img,
    title,
    description,
    codeUrl: code_url,
    demoUrl: demo_url,
  }

  return (
    <Layout>
      <Site
        {...siteProps}
        showInternalLinks={false}
        isCard={false}
      />
    </Layout>
  )
}

export default SiteTemplate
