import React from 'react'
import GlobalStyle from '../styles/reset-css'
import { FlexibleGrid, Container } from '../styles/layoutStyles'
import { Theme } from '../styles/themeStyles'
import { ThemeProvider } from 'styled-components'

const Layout = ({ children }: any) => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <GlobalStyle />
        <FlexibleGrid>{children}</FlexibleGrid>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
