import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StyledCard } from '../styles/cardStyles'
import { containerVariants } from '../styles/layoutStyles'
import Img from 'gatsby-image'

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

  return (
    <>
      {allContentfulCard.nodes.map((card: Icard) => (
        <StyledCard
          key={card.title}
          variants={containerVariants}
          whileHover="hover"
          whileTap="tap"
        >
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
