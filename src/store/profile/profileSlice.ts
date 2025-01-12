import { createSlice } from '@reduxjs/toolkit';
import { Profile } from '@/types/profile';

interface ProfileSlice {
	data: Profile | null;
}

const initialState: ProfileSlice = {
	data: null,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.data = action.payload;
		},
		removeProfile: (state) => {
			state.data = null;
		},
	},
});

export const { setProfile, removeProfile } = profileSlice.actions;
export default profileSlice.reducer;
