import React from 'react'
import Layout from '../components/layout'
import Card from '../components/Card'
import Leisure from '../components/Leisure'
import Perk from '../components/Perk'
import Collection from '../components/Collection'
import NewSlide from '../components/NewSlide'
import LatestNews from '../components/LatestNews'
import TwoColumn from '../components/TwoColumn'
import TravelCard from '../components/TravelCard'
import NewsDigest from '../components/NewsDigest'
import NewsBlock from '../components/NewsBlock'
import BookMark from '../components/BookMark'
import { Title, FlexibleGrid } from '../styles/layoutStyles'

const RootIndex = () => {
  return (
    <Layout>
      <Title>Gatsby-Contentful Blog Components</Title>
      <FlexibleGrid>
        <Card />
        <Leisure />
        <Perk />
        <Perk />
        <Perk />
        <Perk />
        <Collection />
        <Collection />
        <Collection />
        <NewSlide />
        <LatestNews />
        <TwoColumn />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <NewsDigest />
        <NewsBlock />
        <TravelCard />
        <BookMark />
      </FlexibleGrid>
    </Layout>
  )
}

export default RootIndex
