import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Sites from "../components/sites";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            slug
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
      }
    }
  `)

  const projects = data?.allProjectsJson?.edges

  return (
    <Layout>
      <Sites projects={projects} />
    </Layout>
  )
}

export default IndexPage
