import React from 'react'
import GlobalStyle from '../styles/reset-css'
import { Container } from '../styles/layoutStyles'
import { Theme } from '../styles/themeStyles'
import { ThemeProvider } from 'styled-components'

const Layout = ({ children }: any) => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <GlobalStyle />
        <>{children}</>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
