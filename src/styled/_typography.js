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
		padding: '1rem',
		overflowX: 'scroll',
		background: '#3331',
		marginBottom: '1rem',
		fontSize: '0.9rem',
		lineHeight: '1.5rem',
		fontFamily: 'monospace',
		borderRadius: '4px',
		color: colors.code
	}
})

const links = ({ colors }) => ({
	a: {
		textDecoration: 'none',
		color: colors.link,
		transition: defaultTransition('color')
	},
	'a:hover': {
		textDecoration: 'none',
		color: darken(0.2, colors.link),
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
