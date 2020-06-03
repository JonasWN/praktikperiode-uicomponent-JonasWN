import React from 'react'
import StyledNewsBlock from '../styles/newsBlockStyles'

const NewsBlock = () => {
  return (
    <StyledNewsBlock>
      <div className="hero-background" />
      <header>
        <img
          src="https://www.searchpng.com/wp-content/uploads/2018/12/Splash-Instagraam-Icon-Png-1024x1024.png"
          alt="news-block-source-logo"
        />
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
