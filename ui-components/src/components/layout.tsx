import React from 'react'
import { Link } from 'gatsby'
import Container from './container'

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

    return <Container>{children}</Container>
  }
}

export default Template
