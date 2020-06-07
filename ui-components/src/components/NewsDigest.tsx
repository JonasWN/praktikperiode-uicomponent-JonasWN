import React from 'react'
import StyledNewsDigest, {
  StyledOrderedArticle,
} from '../styles/newsDigestStyles'
import { containerVariants } from '../styles/layoutStyles'

interface IOrderProps {
  number?: number
  catagory: string
  description: string
  color?: string
}

const NewsDigest = () => {
  return (
    <StyledNewsDigest
      variants={containerVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <header>
        <h3>News Digest</h3>
      </header>
      <ol>
        {template.map((article: IOrderProps, index: number) => (
          <OrderedArticle
            key={index}
            number={index + 1}
            catagory={article.catagory}
            description={article.description}
            color={article.color}
          />
        ))}
      </ol>
    </StyledNewsDigest>
  )
}

export const OrderedArticle: React.FC<IOrderProps> = ({
  number,
  catagory,
  description,
  color,
}) => {
  return (
    //@ts-ignore
    <StyledOrderedArticle background={color}>
      <div>{number}</div>
      <h4>{catagory}</h4>
      <p>{description}</p>
    </StyledOrderedArticle>
  )
}

const template = [
  {
    catagory: 'Development',
    description:
      'lorem faoflasodf aosdfla osdfalsdf oasdflo adflaosdf asodfla osdfa',
    color: 'cornflowerblue',
  },
  {
    catagory: 'Development',
    description:
      'lorem faoflasodf aosdfla osdfalsdf oasdflo adflaosdf asodfla osdfa',
    color: 'burlywood',
  },
  {
    catagory: 'Development',
    description:
      'lorem faoflasodf aosdfla osdfalsdf oasdflo adflaosdf asodfla osdfa',
    color: 'darksalmon',
  },
  {
    catagory: 'Development',
    description:
      'lorem faoflasodf aosdfla osdfalsdf oasdflo adflaosdf asodfla osdfa',
    color: 'aquamarine',
  },
]

export default NewsDigest
