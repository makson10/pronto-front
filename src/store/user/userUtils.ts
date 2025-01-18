import { encodeCookie, getSessionIdFromCookie } from '@/assets/sessionUtils';
import { FullUser } from '@/types/user';
import axios from 'axios';

export const getUserDataBySession = async (): Promise<FullUser | null> => {
	const sessionId = await getSessionIdFromCookie();
	if (!sessionId) return null;
	const cookieForSending = encodeCookie('sessionId', sessionId);

	const req = await fetch(
		process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/user/getuserdatabysession',
		{
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				Cookie: cookieForSending,
			},
			next: { revalidate: 3600, tags: ['getUserBySessionRequest'] },
		},
	);

	const user = await req.json();
	return user;
};

export const getUserDataByUserId = async (userId: number) => {
	const req = await fetch(
		process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/user/getuserdatabyuserid',
		{
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({ userId }),
			headers: {
				'Content-Type': 'application/json',
			},
			next: { revalidate: 3600, tags: ['getUserByUserIdRequest'] },
		},
	);

	const user = await req.json();
	return user;
};

export const getUserIdBySession = async () => {
	const sessionId = await getSessionIdFromCookie();
	if (!sessionId) throw new Error('You are not logged in yet');
	const cookie = encodeCookie('sessionId', sessionId);

	const req = await fetch(
		process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/user/getuseridbysession',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Cookie: cookie,
			},
		},
	).catch((err) => {
		throw new Error('Error occured during logging in');
	});

	return await req.json().then((data) => data.userId);
};

export const getUserIconById = async (companionId: number) => {
	const req = await axios
		.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/user/getusericonbyid', {
			companionId,
		})
		.catch((err) => {
			throw new Error('Error during getting user icon');
		});

	return req.data;
};
