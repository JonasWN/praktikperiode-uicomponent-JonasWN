import React, { useState } from 'react'
import StyledLeisure from '../styles/leisureStyles'
import { graphql, useStaticQuery } from 'gatsby'

interface Ileisure {
  title: string
  description: string | any
  gallery: Object[]
}

interface Object {
  file: {
    url: string
  }
}

const Leisure = () => {
  const { allContentfulLeisure } = useStaticQuery(
    graphql`
      query {
        allContentfulLeisure {
          nodes {
            title
            description {
              description
            }
            gallery {
              file {
                url
              }
            }
          }
        }
      }
    `
  )
  const [largePhoto, setLargePhoto] = useState(
    allContentfulLeisure.nodes[0].gallery[0].file.url
  )

  const changePhoto = (index: number, e: any) => {
    const newPhoto = e.target.src
    if (largePhoto !== newPhoto) {
      e.target.src = largePhoto
      setLargePhoto(newPhoto)
    }
  }
  return (
    <>
      {allContentfulLeisure.nodes.map((leisure: Ileisure, index: number) => (
        <StyledLeisure key={index}>
          <img src={largePhoto} alt="leisure-gallery" className="large-photo" />
          <article>
            <button>Leisure</button>
            <h2>{leisure.title}</h2>
            <p>{leisure.description.description}</p>
            <div>
              <img
                onClick={(e) => changePhoto(1, e)}
                src={leisure.gallery[1].file.url}
                alt="small-gallery-photo"
              />
              <img
                onClick={(e) => changePhoto(2, e)}
                src={leisure.gallery[2].file.url}
                alt="small-gallery-photo"
              />
              <img
                onClick={(e) => changePhoto(3, e)}
                src={leisure.gallery[3].file.url}
                alt="small-gallery-photo"
              />
            </div>
          </article>
        </StyledLeisure>
      ))}
    </>
  )
}

export default Leisure
