import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

const Site = ({
    slug,
    title,
    demoUrl,
    codeUrl,
    description,
    imageData,
    showInternalLinks = true,
    isCard = true
  }) => {

  const cardContent = (
    <>
      <Typography variant="h4" textAlign="center" gutterBottom>
        {showInternalLinks ? (
            <Link to={`/${slug}/`} style={{textDecoration: "none"}}>{title}</Link>
          ):(
            title
          )}
      </Typography>
      <Box my={2}>
        {showInternalLinks ? (
          <Link to={`/${slug}/`}>
            <GatsbyImage image={imageData} alt={title} />
          </Link>
        ):(
          <GatsbyImage image={imageData} alt={title} />
        )}
      </Box>
      <Typography gutterBottom>{description}</Typography>
      <Typography gutterBottom>
        <a href={demoUrl}>Demo Url</a>
      </Typography>
      <Typography gutterBottom>
        <a href={codeUrl}>Code Url</a>
      </Typography>
    </>
  );
  
  return (
    <>
      {
        isCard ? (
          <Card
            // sx={{ minWidth: 300 }}
          >
            <CardContent>
              {cardContent}
            </CardContent>
          </Card>

        ) : cardContent
      }
    </>
  )
}

export default Site
