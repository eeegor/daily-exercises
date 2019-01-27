import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Post = styled.div({
  padding: '4rem 0'
})
const Content = styled.div({})

export default function Template({
  data
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={frontmatter.keywords} />
      <Post>
        <h1>{frontmatter.title}</h1>
        <small>{frontmatter.date}</small>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Post>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        keywords
      }
    }
  }
`