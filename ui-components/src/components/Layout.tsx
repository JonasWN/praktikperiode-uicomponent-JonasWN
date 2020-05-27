import React from 'react'
import GlobalStyle from '../styles/reset-css'
import { Container, GridContainer } from '../styles/globalStyles'

const Layout = ({ children }: any) => {
  return (
    <Container>
      <GlobalStyle />
      <GridContainer>{children}</GridContainer>
    </Container>
  )
}

export default Layout
