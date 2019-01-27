import { defaultTransition } from './_transitions'
import { darken } from 'polished'

const defaultHeadersMargin = {
	marginBottom: '1rem',
	marginTop: '2rem'
}

const headers = () => ({
	h1: {
		fontSize: '2rem',
		lineHeight: '3rem',
		...defaultHeadersMargin
	},
	h2: {
		fontSize: '1.5rem',
		lineHeight: '3rem',
		...defaultHeadersMargin
	},
	h3: {
		fontSize: '1.25rem',
		...defaultHeadersMargin
	},
	h4: {
		fontSize: '1.15rem',
		...defaultHeadersMargin
	},
	h5: {
		fontSize: '1rem',
		...defaultHeadersMargin
	},
	h6: {
		fontSize: '0.85rem',
		...defaultHeadersMargin
	}
})

const text = () => ({
	p: {
		marginBottom: '1rem'
	}
})

const code = () => ({
	pre: {
		padding: '1rem',
		overflowX: 'scroll',
		background: '#3331',
		marginBottom: '1rem',
		fontSize: '0.9rem',
		lineHeight: '1.5rem',
		fontFamily: 'monospace',
		borderRadius: '4px'
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
	...headers(),
	...text(),
	...links(theme),
	...lists(),
	...code()
})

export default typography
