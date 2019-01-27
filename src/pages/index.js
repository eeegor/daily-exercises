import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const ImageBox = styled.div({ 
  maxWidth: `300px`, 
  marginBottom: `1.45rem` 
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageBox>
      <Image />
    </ImageBox>
  </Layout>
)

export default IndexPage
