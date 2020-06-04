import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { StyledCard } from '../styles/cardStyles'

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
              fluid(maxWidth: 400, maxHeight: 500) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    `
  )
  console.log(allContentfulCard.nodes)

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

export default Card
