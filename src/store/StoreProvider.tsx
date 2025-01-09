'use client';
import { PropsWithChildren, useRef } from 'react';
import { AppStore, makeStore } from './store';
import { Provider } from 'react-redux';
import { setUser } from './user/userSlice';
import { setIsAuthorWatchProfile, setProfile } from './profile/profileSlice';
import { FullUser } from '@/types/user';
import { Profile } from '@/types/profile';

interface Props extends PropsWithChildren {
	user: FullUser | null;
	profile: Profile | null;
}

const StoreProvider = ({ children, user, profile }: Props) => {
	const storeRef = useRef<AppStore>();

	if (!storeRef.current) {
		storeRef.current = makeStore();
		storeRef.current.dispatch(setUser(user));
		storeRef.current.dispatch(setProfile(profile));

		storeRef.current.dispatch(
			setIsAuthorWatchProfile(user?.id === profile?.profileId)
		);
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
