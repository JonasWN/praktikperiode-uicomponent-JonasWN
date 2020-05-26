import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Card from '../components/Card'

const RootIndex = ({ data }: any) => {
  const title = data.allContentfulProduct.edges
  return (
    <Layout>
      <main>
        <Card />
      </main>
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

const Title = styled.h1`
  color: blue;
  text-align: center;
  font-weight: bold;
`
