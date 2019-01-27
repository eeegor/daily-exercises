import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"

const HeaderWrapper = styled.div({
  marginBottom: '1.45rem'
})

const HeaderContainer = styled.div({
  margin: '0 auto',
  maxWidth: '960px',
  padding: '1.45rem 1.0875rem'
})

const H1 = styled.h1({
  margin: 0,
  a: {
    textDecoration: 'none'
  }
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
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
