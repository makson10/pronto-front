'use client';
import { useRef } from 'react';
import { store } from './store';
import { Store } from '@/types/store';

interface Props {
	initialValues: Store;
}

const StoreInitializer = ({ initialValues }: Props) => {
	const initialized = useRef(false);
	if (!initialized.current) {
		store.setState(initialValues);
		initialized.current = true;
	}

	return null;
};

export default StoreInitializer;
