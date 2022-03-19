import * as React from "react"
import { getImage } from "gatsby-plugin-image"
import Grid from "@mui/material/Grid"
import Site from "../components/site"

const Sites = ({projects}) => {
  return (
    <Grid
      container
      spacing={3}
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
            key={key}
            // style={{border: '1px solid pink'}}
          >
            <Site {...siteProps} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Sites;
