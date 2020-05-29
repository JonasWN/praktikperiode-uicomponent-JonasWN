import React from 'react'
import StyledCollection from '../styles/collectionStyles'

const Collection = () => {
  return (
    <StyledCollection>
      <figure>
        <img
          src="https://dummyimage.com/600x400/2c3e50/f2f2f7.jpg&text=+"
          alt="collection-hero"
        />
        <figcaption>Collection</figcaption>
      </figure>
      <div>
        <img
          src="https://dummyimage.com/600x400/ffe08a/f2f2f7.jpg&text=+"
          alt="collection-hero"
          className="avatar"
        />
        <h3>Heading</h3>
        <p>Under-Heading</p>
      </div>
    </StyledCollection>
  )
}

export default Collection
