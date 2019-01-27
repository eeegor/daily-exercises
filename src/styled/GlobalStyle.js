import { createGlobalStyle } from 'styled-components'
import typography from './_typography'

export const theme = {
	colors: {
		headers: '#333',
    text: '#666',
    code: '#444',
		link: '#08f'
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
	  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
	  fontSize: '18px',
		lineHeight: '2rem',
		color: theme.colors.text
	},
	...typography(theme)
})

export default GlobalStyle
