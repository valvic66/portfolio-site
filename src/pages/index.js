import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Site from "../components/site"

const siteData = {
  slug: "project-1",
  title: "Project 1",
  src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
  demoUrl: "https://project1-demo.com",
  codeUrl: "https://project1-code.com",
  description: "First portfolio project",
}

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
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const { allProjectsJson: { edges } } = data;
  const {node: {image: {childImageSharp : {fluid}}}, node: {title}} = edges[0];
  console.log('fluid', fluid, title);

  return (
    <Layout>
      <p>Hello Valentin</p>
      <Site
        title={title}
        imageData={fluid}
      />
    </Layout>
  )
}

export default IndexPage
