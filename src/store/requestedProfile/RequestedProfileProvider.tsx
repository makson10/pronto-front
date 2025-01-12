'use client';
import { Profile } from '@/types/profile';
import { PropsWithChildren, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
	setIsAuthorWatchProfile,
	setRequestedProfile,
} from './requestedProfileSlice';

interface Props extends PropsWithChildren {
	profile: Profile | null;
}

const RequestedProfileProvider = ({ children, profile }: Props) => {
	const userId = useAppSelector((state) => state.user.data?.id);
	const dispatch = useAppDispatch();
	const didMount = useRef(false);

	if (!didMount.current) {
		dispatch(setRequestedProfile(profile));
		dispatch(setIsAuthorWatchProfile(userId === profile?.profileId));
		didMount.current = true;
	}

	return children;
};

export default RequestedProfileProvider;
