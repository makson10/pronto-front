'use client';
import { PropsWithChildren } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import defaultTheme from '@/assets/defaultTheme';

const CustomThemeProvider = ({ children }: PropsWithChildren) => {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={defaultTheme}>
				<NextUIProvider>{children}</NextUIProvider>
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
};

export default CustomThemeProvider;
