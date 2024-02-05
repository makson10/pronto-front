import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	plugins: [],
	theme: {
		keyframes: {
			spin: {
				from: {
					transform: 'rotate(0deg)',
				},
				to: {
					transform: 'rotate(360deg)',
				},
			},
			slideDownAndFade: {
				from: { opacity: '0', transform: 'translateY(-2px)' },
				to: { opacity: '1', transform: 'translateY(0)' },
			},
			slideLeftAndFade: {
				from: { opacity: '0', transform: 'translateX(2px)' },
				to: { opacity: '1', transform: 'translateX(0)' },
			},
			slideUpAndFade: {
				from: { opacity: '0', transform: 'translateY(2px)' },
				to: { opacity: '1', transform: 'translateY(0)' },
			},
			slideRightAndFade: {
				from: { opacity: '0', transform: 'translateX(-2px)' },
				to: { opacity: '1', transform: 'translateX(0)' },
			},
		},
		animation: {
			spin: 'spin 1s linear infinite',
			slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
			slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
			slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
			slideRightAndFade:
				'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
		},
	},
};
export default config;
