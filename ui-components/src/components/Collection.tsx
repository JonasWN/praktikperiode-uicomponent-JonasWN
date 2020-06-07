import React from 'react'
import StyledCollection from '../styles/collectionStyles'
import { useStaticQuery, graphql } from 'gatsby'
import { containerVariants } from '../styles/layoutStyles'

const Collection = () => {
  const { allContentfulCollection } = useStaticQuery(
    graphql`
      query {
        allContentfulCollection {
          nodes {
            index
            title
            name
            avatar {
              file {
                url
              }
            }
            background {
              file {
                url
              }
            }
          }
        }
      }
    `
  )
  const collectionList = allContentfulCollection.nodes.reverse()

  return (
    <>
      {collectionList.map((collection: any, index: number) => (
        <StyledCollection
          variants={containerVariants}
          whileHover="hover"
          whileTap="tap"
          key={index}
        >
          <figure>
            <img src={collection.background.file.url} alt="collection-hero" />
            <figcaption>Collection #{collection.index}</figcaption>
          </figure>
          <div>
            <img
              src={collection.avatar.file.url}
              alt="collection-hero"
              className="avatar"
            />
            <h3>{collection.title}</h3>
            <p>by: {collection.name}</p>
          </div>
        </StyledCollection>
      ))}
    </>
  )
}

export default Collection
