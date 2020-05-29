import React from 'react'
import StyledNewSlide from '../styles/newsSlideStyles'

const NewsSlide = () => {
  return (
    <StyledNewSlide>
      <div className="hero-background"></div>
      <header>
        <div>Logo</div>
        <h3>Source</h3>
        <div>Like</div>
      </header>
      <section>
        <div>
          <h2>Title Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolorum voluptatibus, est nobis magnam iste.
          </p>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </StyledNewSlide>
  )
}

export default NewsSlide
