import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const RouterLink = ({ pathname, children }) => (
  <Link to={pathname}>{children}</Link>
)

export default withRouter(RouterLink)
