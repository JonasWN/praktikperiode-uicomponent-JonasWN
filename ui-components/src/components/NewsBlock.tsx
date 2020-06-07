import React from 'react'
import StyledNewsBlock from '../styles/newsBlockStyles'
//@ts-ignore
import nyTimes from '../assets/News_Logo.svg'
import { containerVariants } from '../styles/layoutStyles'

const NewsBlock = () => {
  return (
    <StyledNewsBlock
      variants={containerVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <div className="hero-background" />
      <header>
        <img src={nyTimes} alt="news-block-source-logo" />
        <h3>Source - New York Times</h3>
      </header>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nemo
        iure id voluptatum earum fugiat nulla. Dolore harum impedit rerum!
      </p>
      <button>Read More</button>
    </StyledNewsBlock>
  )
}

export default NewsBlock
