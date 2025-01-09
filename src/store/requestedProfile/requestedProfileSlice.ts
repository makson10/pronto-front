import { Profile } from '@/types/profile';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface RequestedProfileSlice {
	profile: Profile | null;
}

const initialState: RequestedProfileSlice = {
	profile: null,
};

export const requestedProfileSlice = createSlice({
	name: 'requestedProfile',
	initialState,
	reducers: {
		setRequestedProfile: (state, action) => {
			state.profile = action.payload;
		},
		removeRequestedProfile: (state) => {
			state.profile = initialState.profile;
		},
	},
});

export const { setRequestedProfile, removeRequestedProfile } =
	requestedProfileSlice.actions;
export default requestedProfileSlice.reducer;
