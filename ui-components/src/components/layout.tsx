import React from 'react'
import GlobalStyle from '../styles/reset-css'
import { Container } from '../styles/globalStyles'

const Layout = ({ children }: any) => {
  return (
    <Container>
      <GlobalStyle />
      <main>{children}</main>
    </Container>
  )
}

export default Layout
