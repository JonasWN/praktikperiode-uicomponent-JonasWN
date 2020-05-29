import React from 'react'
import Layout from '../components/layout'
import Card from '../components/Card'
import Leisure from '../components/Leisure'
import Perk from '../components/Perk'
import Collection from '../components/Collection'

const RootIndex = () => {
  return (
    <Layout>
      <Card />
      <Leisure />
      <Perk />
      <Perk />
      <Perk />
      <Perk />
      <Collection />
      <Collection />
      <Collection />
    </Layout>
  )
}

export default RootIndex
