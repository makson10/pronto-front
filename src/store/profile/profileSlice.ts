import { createSlice } from '@reduxjs/toolkit';
import { Profile } from '@/types/profile';

interface ProfileSlice {
	data: Profile | null;
	addingNewPost: boolean;
}

const initialState: ProfileSlice = {
	data: null,
	addingNewPost: false,
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
		openNewPostEditor: (state) => {
			state.addingNewPost = true;
		},
		closeNewPostEditor: (state) => {
			state.addingNewPost = false;
		},
	},
});

export const {
	setProfile,
	removeProfile,
	openNewPostEditor,
	closeNewPostEditor,
} = profileSlice.actions;
export default profileSlice.reducer;
