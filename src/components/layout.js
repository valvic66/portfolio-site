import * as React from "react"
import PropTypes from "prop-types"
import Container from "@mui/material/Container"
import "./layout.css"
import Header from '../components/header';

const Layout = ({ children }) => {
  return (
    <div className="wrapper" style={{backgroundColor: '#000'}}>
      <Header siteTitle="Portfolio Site" />
      <Container maxWidth="md">
        <main>{children}</main>
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
