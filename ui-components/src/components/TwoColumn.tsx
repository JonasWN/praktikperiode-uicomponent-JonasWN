import React from 'react'
import StyledTwoColumn from '../styles/twoColumnStyles'
import { NewsArticle } from './LatestNews'
import { containerVariants } from '../styles/layoutStyles'

interface Iobject {
  thumb: string
  catagory: string
  description: string
}

const TwoColumn = () => {
  return (
    <StyledTwoColumn
      variants={containerVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {template.map((article: Iobject, index: number) => (
        <NewsArticle
          key={index}
          thumb={article.thumb}
          catagory={article.catagory}
          description={article.description}
        />
      ))}
    </StyledTwoColumn>
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
]

export default TwoColumn
