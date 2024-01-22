import { create } from 'zustand';
import { Store } from '@/types/storeTypes';

export const initialValues = {
	user: null,
};

// export const storeFunctions = (set: SetFunctionType) => {
// 	return {
// 		setInitialValues: () => set((state) => (state = initialValues)),
// 	};
// };

export const store = create<Store>((set) => ({
	...initialValues,
	// setInitialValues: () => set((state) => (state = initialValues)),
}));
