import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

import Layout from "../components/layout"
import Site from "../components/site"

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
      <Container
        maxWidth="md"
        // style={{ border: "1px solid red" }}
      >
        <Grid
          container
          spacing={2}
          // style={{ border: "1px solid blue" }}
          // justifyContent="center"
          // alignItems="center"
        >
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
            }

            return (
              <Grid
                item
                md={6}
                lg={4}
                // style={{border: '1px solid pink'}}
              >
                <Site {...siteProps} key={key} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
