import { createTheme } from '@mui/material';

const defaultTheme = createTheme({
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				disableRipple: true,
			},
		},
		MuiLink: {
			defaultProps: {
				underline: 'none',
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					lineHeight: 'inherit',
				},
			},
		},
	},
	typography: {
		fontFamily:
			'ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
	},
	palette: {
		primary: {
			main: '#ffffff',
		},
	},
});

export default defaultTheme;
