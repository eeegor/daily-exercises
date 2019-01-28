---

path: "/up-and-running-with-gatsby"
title: "Up and running with Gatsby"
date: "2019-01-27"
keywords: ['react', 'gatsby']

---

## Gatsby

This tutorial uses gatsby-cli `2.4.8`

## Getting started

### Install gatsby-cli

```bash
# with npm
npm install -g gatsby-cli

# or yarn
yarn global add gatsby-cli
```

### Create new project

```bash
gatsby new {project-name}
cd {project-name}
gatsby develop
```

### Configure personal settings

- Configure metadata and presets in `./gatsby-config.js`
- Configure information in `./package.json`
- Configure information in `./README.md`

### Available plugins

[Official docs](https://www.gatsbyjs.org/docs/plugins/)

### Styled components

> If you want to use `sass` instead, here is a fine [video tutorial](https://www.youtube.com/watch?v=Jm7AMhKLeIU)

```bash
yarn add gatsby-plugin-styled-components styled-components babel-plugin-styled-components
```

Add to `./gatsby-config.js`:

```javascript
module.exports = {
  ...
  plugins: [`gatsby-plugin-styled-components`],
  ...
}
```

Restart the server

```bash
gatsby develop
```

#### Refactor `src/components/header.js` to use Styled components

```javascript
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"

const HeaderWrapper = styled.div({
  marginBottom: '1.5rem'
})

const HeaderContainer = styled.div({
  margin: '0 auto',
  maxWidth: '960px',
  padding: '1.5rem 1rem'
})

const H1 = styled.h1({
  margin: 0
})

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <H1>
        <Link to="/">
          {siteTitle}
        </Link>
      </H1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
```

#### Refactor `src/components/layout.js` to use Styled components

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import './layout.css'

const Container = styled.div({
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1rem 1.5rem',
  paddingTop: 0
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
```

### Create a new `Footer` component inside `./src/components/footer.js`

```javascript
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer({
  margin: '6rem 0 4rem 0'
})

const Footer = ({ siteAuthor, siteAuthorUrl }) => (
  <FooterWrapper>
    © {new Date().getFullYear()}, Built by
    {` `}
    <a href={siteAuthorUrl}>{siteAuthor}</a>
  </FooterWrapper>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string,
  siteAuthorUrl: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: '',
  siteAuthorUrl: '',
}

export default Footer
```

Replace old `footer` inside `./src/components/layout.js` with new `Footer` component

```javascript
...
import Footer from './footer'
...

const Layout = ({ children, showDescription }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            authorUrl
          }
        }
      }
    `}
    render={data => (
      <>
        ...
        <Container>
          ...
          <Footer 
            siteAuthor={data.site.siteMetadata.author} 
            siteAuthorUrl={data.site.siteMetadata.authorUrl} 
          />
        </Container>
        ...
      </>
    )}
  />
)
...
```

#### Refactor `./src/pages/index.js` to use Styled components

```javascript
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const ImageBox = styled.div({ 
  maxWidth: '300px', 
  marginBottom: '1.5rem' 
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageBox>
      <Image />
    </ImageBox>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
```

### Add markdown support

#### 1. Install dependencies

```bash
yarn add gatsby-source-filesystem gatsby-transformer-remark
```

#### 2. Add to `./gatsby-config.js`:

```javascript
module.exports = {
  ...
  plugins: [
    ...
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      }
    },
    `gatsby-transformer-remark`,
    ...
  ],
  ...
}
```

#### 3. Create some markdown files inside `./src/posts`

Every markdown file is required to have a valid frontmatter, see example below

```html
---
path: "/any-path-you-want"
title: "Any Title You Want"
date: "2019-01-27"
keywords: ["one", "two", "three"]
---

# Any content goes here
```

#### 4. Add to `gatsby-node.js`

```javascript
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}
      })
    })
  })
}
```

#### 5. Create new template `src/templates/post.js`

```javascript
import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Post = styled.div({})
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
```

#### 6. Add `posts` to index page

Replace contents of `./src/pages/index.js` with following

```javascript
import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PostPreview = styled.div({
  borderBottom: '1px dashed #3333',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 0',
  '&:last-of-type': {
    borderBottom: 0,
    marginBottom: '1rem'
  }
})

export const Description = styled.div({
  marginBottom: '2rem'
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
            <div><Link to={path}>{title}</Link></div>
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
    allMarkdownRemark(limit: 10, sort: { order: DESC, fields: [frontmatter___date] }) {
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
```

#### 7. Remove unused files

- `src/components/layout.css`
- `src/pages/page-2.js`

#### 8. Add `GlobalStyles`

Create new file `./src/styled/GlobalStyle.js`

```javascript
import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    code: '#444',
    headers: '#333',
    link: '#08f',
    text: '#666'
  }
}

const GlobalStyle = createGlobalStyle({
  '*, *:before, * after': {
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeigth: 'inherit',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0,
  },
  html: {
    color: theme.colors.text,
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
    fontSize: '18px',
    lineHeight: '2rem',
  }
})

export default GlobalStyle
```

Add `GlobalStyle` to `./src/components/layout.js`

```javascript
...
import GlobalStyle from '../styled/GlobalStyle'
...
const Layout = ({ children, showDescription }) => (
  <StaticQuery
    ...
    render={data => (
      <>
        ...
        <GlobalStyle />
      </>
    )}
  />
)
```

#### 9. Add Typography and Transitions

Polished is a helper library for scss like styled-components tools

```bash
yarn add polished
```

Let's create a helper method for default transitions inside `./src/styled/_transitions.js`

```javascript
export const defaultTransition = (...args) => {
  const TIMING = 0.15
  const EASE = 'ease-in-out'
  if (args && args.length === 1) {
    return `${args[0]} ${TIMING}s ${EASE}`
  }
  if (args && args.length > 1) {
    return `${args.join(` ${TIMING}s, `)} ${TIMING}s ${EASE}`
  }
  return `all ${TIMING}s ${EASE}`
}
```

Now let's create some basic typography rules inside `./src/styled/_typography.js`

```javascript
import { defaultTransition } from './_transitions'
import { darken } from 'polished'

const defaultHeadersMargin = {
  marginBottom: '1rem',
  marginTop: '2rem'
}

const headers = ({ colors }) => ({
  'h1, h2, h3, h4, h5, h6': {
    ...defaultHeadersMargin,
    color: colors.headers
  },
  h1: {
    fontSize: '2rem',
    lineHeight: '3rem'
  },
  h2: {
    fontSize: '1.5rem',
    lineHeight: '3rem'
  },
  h3: {
    fontSize: '1.25rem'
  },
  h4: {
    fontSize: '1.15rem'
  },
  h5: {
    fontSize: '1rem'
  },
  h6: {
    fontSize: '0.85rem'
  }
})

const text = () => ({
  p: {
    marginBottom: '1rem'
  }
})

const code = ({ colors }) => ({
  pre: {
    background: '#3331',
    borderRadius: '4px',
    color: colors.code,
    fontFamily: 'monospace',
    fontSize: '0.9rem',
    lineHeight: '1.5rem',
    marginBottom: '1rem',
    overflowX: 'scroll',
    padding: '1rem'
  }
})

const links = ({ colors }) => ({
  a: {
    color: colors.link,
    textDecoration: 'none',
    transition: defaultTransition('color')
  },
  'a:hover': {
    color: darken(0.2, colors.link),
    textDecoration: 'none',
    transition: defaultTransition('color')
  }
})

const lists = () => ({
  'ul, ol': {
    paddingLeft: '1.5rem'
  }
})

const typography = (theme) => ({
  ...headers(theme),
  ...text(),
  ...links(theme),
  ...lists(),
  ...code(theme)
})

export default typography
```

Add `_typography` to `src/styled/GlobalStyle.js`

```javascript
...
import typography from './_typography'
...
const GlobalStyle = createGlobalStyle({
  ...
  ...typography(theme)
})

export default GlobalStyle
```