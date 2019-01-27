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
