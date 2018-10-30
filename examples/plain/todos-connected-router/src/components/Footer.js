import React from 'react'
import RouterLink from './RouterLink'

const Footer = () => (
  <p>
    Pages:
    <RouterLink pathname={'/'}>View page</RouterLink>
    , <RouterLink pathname={'/add'}>Add page</RouterLink>
  </p>
)

export default Footer
