import * as React from "react"
import PropTypes from "prop-types"
import Container from "@mui/material/Container"
import "./layout.css"
import Header from "../components/header"
import Box from "@mui/material/Box"
import { Link } from "gatsby"

// const backgroundImageUrl = 'https://cdn.dribbble.com/users/211312/screenshots/6007441/media/8b59f94d9ef3e15c2e3ae256bc4aa28d.jpg?compress=1&resize=400x300';

const Layout = ({ children }) => {
  return (
    <div
      className="wrapper"
      style={
        {
          // backgroundImage: `url(${backgroundImageUrl})`,
          // backgroundAttachment: 'fixed',
        }
      }
    >
      <Header siteTitle="Portfolio Site" />
      <Container maxWidth="md">
        <Box className="gohome-arrow-container">
          <Link to="/" style={{ textDecoration: "none"}}>
            <span style={{ color: "white" }}>&#8592;</span>
          </Link>
        </Box>
        <main>{children}</main>
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
