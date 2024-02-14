'use client';
import { NextUIProvider } from '@nextui-org/react';

interface Props {
	children: React.ReactNode;
}

export default function CustomNextUIProvider({ children }: Props) {
	return <NextUIProvider>{children}</NextUIProvider>;
}
