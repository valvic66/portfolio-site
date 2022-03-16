import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const Site = ({ slug, title, demoUrl, codeUrl, description, imageData }) => {
  return (
    <>
      <Card
        // sx={{ minWidth: 300 }}
      >
        <CardContent>
          <Typography variant="h4" textAlign="center" gutterBottom>
            <Link to={`/${slug}/`} style={{textDecoration: "none"}}>{title}</Link>
          </Typography>
          <Box my={2}>
            <Link to={`/${slug}/`}>
              <GatsbyImage image={imageData} alt={title} />
            </Link>
          </Box>
          <Typography gutterBottom>{description}</Typography>
          <Typography gutterBottom>
            <a href={demoUrl}>Demo Url</a>
          </Typography>
          <Typography gutterBottom>
            <a href={codeUrl}>Code Url</a>
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Site
