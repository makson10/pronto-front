'use client';
import { useRef } from 'react';
import { store } from './store';
import { Store } from '@/types/storeTypes';

interface Props {
	initialValues: Store;
}

export default function StoreInitializer({ initialValues }: Props) {
	const initialized = useRef(false);
	if (!initialized.current) {
		store.setState(initialValues);
		initialized.current = true;
	}

	return null;
}
