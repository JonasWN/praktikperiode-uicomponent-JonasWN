import React from 'react'
import StyledTravelCard from '../styles/travelCardStyles'
import { Paragraph } from './LatestNews'

const TravelCard = () => {
  return (
    //@ts-ignore
    <StyledTravelCard cover="https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1950&q=80">
      <div className="hero-background" />
      <Paragraph
        title={'title'}
        description={
          'lorem test filter orem loasdfl ofasdfo lfa odfl lfsodfl aodf a fasdfa dfad fasdfa sdfa dfasdfadfasdf'
        }
      />
    </StyledTravelCard>
  )
}

export default TravelCard
