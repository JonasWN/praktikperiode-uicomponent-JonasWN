import React, { useState, useEffect } from 'react'
import StyledNewSlide from '../styles/newSlideStyles'
import { Heart } from '@styled-icons/boxicons-solid/Heart'

const interval: number = 5000
const resetTimer: number = 0
let slideIndex: number = 0

const NewSlide = () => {
  const [data, setData] = useState(template[slideIndex])

  const updateSlide = (index: any) => {
    data.title !== template[template.length - 1].title
      ? slideIndex++
      : (slideIndex = resetTimer)
    setData(template[slideIndex])

    if (index || index === 0) {
      slideIndex = index
      setData(template[slideIndex])
    }
  }

  useEffect(() => {
    const timeInterval = setInterval(updateSlide, interval)
    return () => clearInterval(timeInterval)
  }, [slideIndex])

  return (
    //@ts-ignore
    <StyledNewSlide currentSlide={slideIndex} cover={data.cover}>
      <div className="hero-background" />
      <header>
        <img
          src="https://www.searchpng.com/wp-content/uploads/2018/12/Splash-Instagraam-Icon-Png-1024x1024.png"
          alt="newslide-source-logo"
        />
        <h3>{data.source}</h3>
        <Heart />
      </header>
      <section>
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <ul>
          {template.map((slide: object, index: number) => (
            <li key={index} onClick={() => updateSlide(index)}></li>
          ))}
        </ul>
      </section>
    </StyledNewSlide>
  )
}

const template = [
  {
    source: 'source-1 lorem asfasdfa asdfa dasdf',
    title: 'title-1 loasdfo akosdfaodfkadf',
    description: 'description-1 foalfaosldf',
    cover:
      'https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    source: 'source-2 lorem asfasdfa asdfa dasdf',
    title: 'title-2 loasdfo akosdfaodfkadf',
    description: 'description-2 foalfaosldf',
    cover:
      'https://images.unsplash.com/photo-1496284045406-d3e0b918d7ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
  },
  {
    source: 'source-3 lorem asfasdfa asdfa dasdf',
    title: 'title-3 loasdfo akosdfaodfkadf',
    description: 'description-3 foalfaosldf',
    cover:
      'https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1950&q=80',
  },
]

export default NewSlide
