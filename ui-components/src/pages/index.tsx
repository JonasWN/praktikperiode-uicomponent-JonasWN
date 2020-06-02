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
      </FlexibleGrid>
    </Layout>
  )
}

export default RootIndex
