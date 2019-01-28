import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PostPreview = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 0',
  borderBottom: '1px dashed #3333',
  '&:last-of-type': {
    marginBottom: '1rem',
  },
})

export const Description = styled.div({
  marginBottom: '2rem',
})

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout showDescription>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {edges.map((el, index) => {
        const { path, title, date } = el.node.frontmatter
        return (
          <PostPreview key={index}>
            <div>
              <Link to={path}>{title}</Link>
            </div>
            <div>
              <small>{date}</small>
            </div>
          </PostPreview>
        )
      })}
    </Layout>
  )
}

export const indexPostQuery = graphql`
  query IndexPostQuery {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            keywords
          }
        }
      }
    }
  }
`

export default IndexPage
