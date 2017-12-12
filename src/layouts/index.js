import React from 'react'
import Link from 'gatsby-link'
import {Container} from 'react-responsive-grid'
import {rhythm, scale} from '../utils/typography'
import Circle from '../components/Circle'
import Carousel from '../components/Carousel'

class Template extends React.Component {
  render() {
    return (
      <Container
        style={{
          maxWidth: rhythm(40),
          padding: 0
        }}>
        <Carousel>
          <Circle text="1" url="#" offsetWidth={450} />
          <Circle text="2" url="#" offsetWidth={450} />
          <Circle text="3" url="#" offsetWidth={450} />
          {/* <Circle text="4" url="#" offsetWidth={450} /> */}
        </Carousel>
      </Container>
    )
  }
}

export default Template
