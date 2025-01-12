import { Profile } from '@/types/profile';
import { createSlice } from '@reduxjs/toolkit';

interface RequestedProfileSlice {
	isAuthorWatchProfile: boolean;
	data: Profile | null;
}

const initialState: RequestedProfileSlice = {
	isAuthorWatchProfile: false,
	data: null,
};

export const requestedProfileSlice = createSlice({
	name: 'requestedProfile',
	initialState,
	reducers: {
		setRequestedProfile: (state, action) => {
			state.data = action.payload;
		},
		removeRequestedProfile: (state) => {
			state.isAuthorWatchProfile = initialState.isAuthorWatchProfile;
			state.data = initialState.data;
		},
		setIsAuthorWatchProfile: (state, action) => {
			state.isAuthorWatchProfile = action.payload;
		},
	},
});

export const {
	setRequestedProfile,
	removeRequestedProfile,
	setIsAuthorWatchProfile,
} = requestedProfileSlice.actions;
export default requestedProfileSlice.reducer;
