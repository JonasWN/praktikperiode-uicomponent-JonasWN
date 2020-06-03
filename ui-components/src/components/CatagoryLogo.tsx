import React from 'react'
import StyledCatagoryLogo from '../styles/catagoryLogoStyles'
import { GiBookmarklet } from 'react-icons/gi'

const CatagoryLogo = () => {
  return (
    <StyledCatagoryLogo>
      <GiBookmarklet className="catagory-logo" />
      <h2>design</h2>
    </StyledCatagoryLogo>
  )
}

export default CatagoryLogo
