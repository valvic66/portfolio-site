import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

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
  console.log("sites", site)
  return (
    <Layout>
      <pre>{JSON.stringify(site, null, 2)}</pre>
    </Layout>
  )
}

export default SiteTemplate
