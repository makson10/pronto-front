import { create } from 'zustand';
import { Store } from '@/types/store';

export const initialValues = {
	user: null,
	profile: null,
};

export const store = create<Store>((set) => ({
	...initialValues,
	setInitialValues: () => set(initialValues),
}));
