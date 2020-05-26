import React from 'react'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'

const Layout = ({ children }: any) => {
  return (
    <Container>
      <GlobalStyle />
      <main>{children}</main>
    </Container>
  )
}

const Container = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 30px 0;
`

export default Layout
