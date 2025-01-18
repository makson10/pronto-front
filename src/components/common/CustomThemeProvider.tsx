'use client';
import { PropsWithChildren } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from '@mui/material';
import defaultTheme from '@/assets/defaultTheme';

const CustomThemeProvider = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<NextUIProvider>{children}</NextUIProvider>
		</ThemeProvider>
	);
};

export default CustomThemeProvider;
