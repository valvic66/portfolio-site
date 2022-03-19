import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {GlobalDispatchContext, GlobalStateContext} from '../context/GlobalContextProvider';

const Header = ({ siteTitle }) => {
  const dispatch = React.useContext(GlobalDispatchContext);
  const state = React.useContext(GlobalStateContext);

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <button onClick={() => dispatch({type: 'TOGGLE_THEME'})}>Toggle Theme</button>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle} - {state.theme}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
