import React from 'react'
import {
  StyledLatest,
  StyledNewsArticle,
  StyledParagraph,
} from '../styles/lastestStyles'

interface Iobject {
  thumb: string
  catagory: string
  description: string
}

interface Iparagraph {
  title: string
  description: string
}

const LatestNews: React.FC = () => {
  return (
    <StyledLatest>
      <header>
        <h2>Latest News</h2>
      </header>
      <article>
        {template.map((article: Iobject, index: number) => {
          return (
            <NewsArticle
              key={index}
              thumb={article.thumb}
              catagory={article.catagory}
              description={article.description}
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

export const NewsArticle: React.FC<Iobject> = ({
  thumb,
  catagory,
  description,
}) => {
  return (
    <StyledNewsArticle>
      <img src={thumb} alt="latest-news-thumb" />
      <Paragraph title={catagory} description={description} />
    </StyledNewsArticle>
  )
}

export const Paragraph: React.FC<Iparagraph> = ({ title, description }) => (
  <StyledParagraph>
    <h3>{title}</h3>
    <p>{description}</p>
  </StyledParagraph>
)

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
