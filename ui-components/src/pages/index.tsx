import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'

const Title = styled.h1`
  color: blue;
  text-align: center;
  font-weight: bold;
`

const RootIndex = ({ data }: any) => {
  const title = data.allContentfulProduct.edges
  return (
    <Layout>
      <header>
        {title.map(({ node }: any) => (
          <Title>{node.productName.productName}</Title>
        ))}
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProduct {
      edges {
        node {
          slug
          productName {
            productName
          }
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
