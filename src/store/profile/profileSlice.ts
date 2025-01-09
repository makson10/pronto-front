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
		setIsAuthorWatchProfile: (state, action) => {
			if (state.data) {
				state.data.isAuthorWatchProfile = action.payload;
			}
		},
	},
});

export const { setProfile, removeProfile, setIsAuthorWatchProfile } =
	profileSlice.actions;
export default profileSlice.reducer;
