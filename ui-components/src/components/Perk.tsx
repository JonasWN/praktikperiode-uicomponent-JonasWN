import React from 'react'
import StyledPerk from '../styles/perkStyles'
import { AiOutlineDeliveredProcedure } from 'react-icons/ai'
import { useStaticQuery, graphql } from 'gatsby'

const Perk = () => {
  const { allContentfulPerk } = useStaticQuery(
    graphql`
      query {
        allContentfulPerk {
          nodes {
            title
            description
          }
        }
      }
    `
  )
  return (
    <>
      {allContentfulPerk.nodes.map((perk: any, index: number) => (
        <StyledPerk>
          <AiOutlineDeliveredProcedure className="perk-icon" />
          <article>
            <h3>{perk.title}</h3>
            <p>{perk.description}</p>
          </article>
        </StyledPerk>
      ))}
    </>
  )
}

export default Perk
