import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Site from "../components/site"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
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
      <p>Hello Valentin</p>
      {projects?.map((project, key) => {
        const { title, description, slug, code_url, demo_url, image } =
          project?.node
        const img = getImage(image)

        const siteProps = {
          imageData: img,
          title,
          description,
          slug,
          codeUrl: code_url,
          demoUrl: demo_url,
          imageData: img,
        }

        return <Site {...siteProps} key={key} />
      })}
    </Layout>
  )
}

export default IndexPage
