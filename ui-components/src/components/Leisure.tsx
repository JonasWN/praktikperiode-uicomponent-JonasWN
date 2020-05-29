import React from 'react'
import StyledLeisure from '../styles/leisureStyles'

const Leisure = () => {
  return (
    <StyledLeisure>
      <img
        src="https://dummyimage.com/200x400/2c3e50/f2f2f7.jpg&text=Placeholder"
        alt="leisure-gallery"
      />
      <article>
        <button>Leisure</button>
        <h2>
          <span> title</span>
          <span> section</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
          doloremque ullam voluptatem tempora iure laborum totam labore ratione
          fuga. Voluptate, recusandae. Ipsam minima odit architecto sit vitae
          asperiores atque?
        </p>
        <div>
          <img
            src="https://dummyimage.com/100x100/2c3e50/f2f2f7.jpg&text=Placeholder"
            alt="leisure-gallery"
          />
          <img
            src="https://dummyimage.com/100x100/2c3e50/f2f2f7.jpg&text=Placeholder"
            alt="leisure-gallery"
          />
          <img
            src="https://dummyimage.com/100x100/2c3e50/f2f2f7.jpg&text=Placeholder"
            alt="leisure-gallery"
          />
        </div>
      </article>
    </StyledLeisure>
  )
}

export default Leisure
