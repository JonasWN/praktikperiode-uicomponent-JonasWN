import React from 'react'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'

class Template extends React.Component {
  render() {
    const { location, children }: any = this.props
    let header

    let rootPath = `/`
    //@ts-ignore
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      //@ts-ignore
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <GlobalStyle></GlobalStyle>
        {children}
      </Container>
    )
  }
}

const Container = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 30px 0;
`

export default Template
