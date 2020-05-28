import React from 'react'
import StyledPerk from '../styles/perkStyles'
import { AiOutlineDeliveredProcedure } from 'react-icons/ai'

const Perk = () => {
  return (
    <StyledPerk>
      <AiOutlineDeliveredProcedure className="perk-icon" />
      <article>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos
          assumenda neque consequatur pariatur exercitationem quam molestiae
          quod itaque distinctio!
        </p>
      </article>
    </StyledPerk>
  )
}

export default Perk
