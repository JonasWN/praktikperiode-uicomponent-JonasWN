import React from 'react'
import {
  StyledLatest,
  StyledNewsArticle,
  StyledParagraph,
} from '../styles/lastestStyles'
import { useStaticQuery, graphql } from 'gatsby'
import { containerVariants } from '../styles/layoutStyles'

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
  const { allContentfulLatest } = useStaticQuery(
    graphql`
      query {
        allContentfulLatest {
          nodes {
            catagory
            description
            thumbnail {
              file {
                url
              }
            }
          }
        }
      }
    `
  )

  const LatestList = allContentfulLatest.nodes
  return (
    <StyledLatest
      variants={containerVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <header>
        <h2>Latest News</h2>
      </header>
      <article>
        {LatestList.map((article: any, index: number) => {
          return (
            <NewsArticle
              key={index}
              thumb={article.thumbnail.file.url}
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

export default LatestNews
