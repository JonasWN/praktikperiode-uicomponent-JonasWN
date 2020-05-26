import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { shadow } from './GlobalStyle'

interface Icard {
  catagory: string
  content: string
  title: string
  image: {
    fluid: {
      aspectRatio: number
      sizes: string
      src: string
      srcSet: string
    }
  }
}

const Card: React.FC = () => {
  const { allContentfulCard } = useStaticQuery(
    graphql`
      query {
        allContentfulCard {
          nodes {
            catagory
            content
            title
            image {
              fluid(maxWidth: 400, maxHeight: 500, toFormat: NO_CHANGE) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    `
  )

  return (
    <>
      {allContentfulCard.nodes.map((card: Icard) => (
        <StyledCard key={card.title}>
          <Img fluid={card.image.fluid} className="card-image" />
          <div>
            <h3>{card.catagory}</h3>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        </StyledCard>
      ))}
    </>
  )
}

const StyledCard = styled.article`
  width: 300px;
  height: 420px;
  background: #fff;

  border-radius: 15px;

  box-shadow: ${shadow.sm};

  :hover {
    cursor: pointer;
  }

  .card-image {
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    filter: contrast(1.2);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: medium;

    height: 50%;

    padding: 10%;
    h3 {
      font-size: 0.75em;
      font-weight: 500;
      text-transform: uppercase;
    }
    h2 {
      font-weight: bold;
    }
    p {
      font-weight: 300;
    }
  }
`

export default Card
