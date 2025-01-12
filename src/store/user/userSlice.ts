import { createSlice } from '@reduxjs/toolkit';
import { FullUser } from '@/types/user';

interface UserSlice {
	authorized: boolean;
	data: FullUser | null;
}

const initialState: UserSlice = {
	authorized: false,
	data: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.data = action.payload;
			state.authorized = !!action.payload;
		},
		removeUser: (state) => {
			state.authorized = initialState.authorized;
			state.data = initialState.data;
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
