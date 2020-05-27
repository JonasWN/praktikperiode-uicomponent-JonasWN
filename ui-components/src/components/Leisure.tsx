import React from 'react'
import StyledLeisure from '../styles/leisureStyles'

const Leisure = () => {
  return (
    <StyledLeisure>
      <img src="https://place-hold.it/200x300" alt="leisure-gallery" />
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
          <img src="https://place-hold.it/100x100" alt="leisure-gallery" />
          <img src="https://place-hold.it/100x100" alt="leisure-gallery" />
          <img src="https://place-hold.it/100x100" alt="leisure-gallery" />
        </div>
      </article>
    </StyledLeisure>
  )
}

export default Leisure
