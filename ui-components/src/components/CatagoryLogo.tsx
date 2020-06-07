import React from 'react'
import StyledCatagoryLogo from '../styles/catagoryLogoStyles'
import { GiBookmarklet } from 'react-icons/gi'
import { containerVariants } from '../styles/layoutStyles'

const CatagoryLogo = () => {
  return (
    <StyledCatagoryLogo
      variants={containerVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <GiBookmarklet className="catagory-logo" />
      <h2>design</h2>
    </StyledCatagoryLogo>
  )
}

export default CatagoryLogo
