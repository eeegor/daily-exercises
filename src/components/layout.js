import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import GlobalStyle from '../styled/GlobalStyle'
import Header from './header'
import Footer from './footer'

export const Container = styled.div({
  margin: '0 auto',
  maxWidth: '960px',
  padding: '0px 1.0875rem 1.45rem',
  paddingTop: 0,
})

export const Description = styled.div({
  marginBottom: '1rem',
})

const Layout = ({ children, showDescription }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          {showDescription && (
            <Description>{data.site.siteMetadata.description}</Description>
          )}
          {children}
          <Footer
            siteAuthor={data.site.siteMetadata.author}
            siteAuthorUrl={'https://egorkirpichev.com/'}
          />
        </Container>
        <GlobalStyle />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
