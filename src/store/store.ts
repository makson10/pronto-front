import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import profileSlice from './profile/profileSlice';
import requestedProfileSlice from './requestedProfile/requestedProfileSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			user: userSlice,
			profile: profileSlice,
			requestedProfile: requestedProfileSlice,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
