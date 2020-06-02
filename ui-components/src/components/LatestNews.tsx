import React from 'react'
import StyledLatest from '../styles/lastestStyles'

interface Iobject {
  thumb: string
  catagory: string
  description: string
}

const LatestNews: React.FC = () => {
  return (
    <StyledLatest>
      <header>
        <h2>Latest News</h2>
      </header>
      <article>
        {template.map((section: Iobject, index: number) => {
          return (
            <Section
              key={index}
              thumb={section.thumb}
              catagory={section.catagory}
              description={section.description}
            />
          )
        })}
      </article>
      <footer>
        <h3>More News</h3>
      </footer>
    </StyledLatest>
  )
}

const Section: React.FC<Iobject> = ({ thumb, catagory, description }) => {
  return (
    <section>
      <img src={thumb} alt="latest-news-thumb" />
      <div>
        <h3>{catagory}</h3>
        <p>{description}</p>
      </div>
    </section>
  )
}

const template = [
  {
    thumb: 'https://dummyimage.com/120x120/2c3e50/f2f2f7.jpg&text=Placeholder',
    catagory: 'Nature',
    description: 'filter lorem text ipsum amet sit elit odio',
  },
  {
    thumb: 'https://dummyimage.com/120x120/2c3e50/f2f2f7.jpg&text=Placeholder',
    catagory: 'Nature',
    description: 'filter lorem text ipsum amet sit elit odio',
  },
  {
    thumb: 'https://dummyimage.com/120x120/2c3e50/f2f2f7.jpg&text=Placeholder',
    catagory: 'Nature',
    description: 'filter lorem text ipsum amet sit elit odio',
  },
  {
    thumb: 'https://dummyimage.com/120x120/2c3e50/f2f2f7.jpg&text=Placeholder',
    catagory: 'Nature',
    description: 'filter lorem text ipsum amet sit elit odio',
  },
  {
    thumb: 'https://dummyimage.com/120x120/2c3e50/f2f2f7.jpg&text=Placeholder',
    catagory: 'Nature',
    description: 'filter lorem text ipsum amet sit elit odio',
  },
]

export default LatestNews
