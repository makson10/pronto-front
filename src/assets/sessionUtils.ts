import { cookies } from 'next/headers';
import { CookieSerializeOptions } from 'cookie';
import * as cookie from 'cookie';
import axios, { AxiosResponse } from 'axios';
import { Profile } from '@/types/profile';
import { Chats } from '@/types/chat';
import { FullUser } from '@/types/user';

export const sessionCookieOptions: CookieSerializeOptions = {
	secure: process.env.NODE_ENV === 'production',
	maxAge: 28 * 24 * 60 * 60,
};

export const getSessionFromRequest = async (
	request: AxiosResponse
): Promise<string> => {
	const signUpRequestCookie = request.headers['set-cookie']?.find((cookie) =>
		cookie.match(/^sessionId/gim)
	);

	return cookie.parse(signUpRequestCookie!).sessionId;
};

export const setNewSession = (sessionId: string): void => {
	cookies().set('sessionId', sessionId, sessionCookieOptions);
};

export const getSessionIdFromCookie = (): string | null => {
	const sessionCookie = cookies().get('sessionId');
	return sessionCookie?.value ? sessionCookie?.value : null;
};

export const encodeCookie = (key: string, value: string): string => {
	return cookie.serialize(key, value);
};

export const deleteSession = (): void => {
	cookies().delete('sessionId');
};

export const getUserDataBySession = async (): Promise<FullUser | null> => {
	const sessionId = getSessionIdFromCookie();
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
		}
	);

	const user = await req.json();
	return user;
};

export const getUserDataByUserId = async (
	userId: number | string
): Promise<FullUser> => {
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
		}
	);

	const user = await req.json();
	return user;
};

export const getProfile = async (userId: number | string): Promise<Profile> => {
	const req = await fetch(
		process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/profile/getprofile',
		{
			method: 'POST',
			body: JSON.stringify({ userId }),
			headers: {
				'Content-Type': 'application/json',
			},
			next: { revalidate: 3600, tags: ['getuserprofile'] },
		}
	);

	const profile = await req.json();
	return profile;
};

export const getUserIdBySession = async (): Promise<number> => {
	const sessionId = getSessionIdFromCookie();
	if (!sessionId)
		throw new Error('No stored session was found', {
			cause: "It seems you aren't authorized",
		});
	const cookie = encodeCookie('sessionId', sessionId);

	const req = await fetch(
		process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/user/getuseridbysession',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Cookie: cookie,
			},
		}
	).catch((err) => {
		throw new Error('Not available to unauthorized users');
	});

	const userId = await req.json().then((data) => data.userId);
	return parseInt(userId);
};

export const getUserIconById = async (companionId: number): Promise<string> => {
	const req = await axios
		.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/user/getusericonbyid', {
			companionId,
		})
		.catch((err) => {
			throw new Error('Error during getting user icon');
		});

	return req.data;
};

const sortChatsByTimestamp = (chats: Chats): Chats => {
	return chats.sort(
		(a, b) =>
			new Date(b.lastMessageTimestamp).getTime() -
			new Date(a.lastMessageTimestamp).getTime()
	);
};

export const getUserChats = async (): Promise<Chats> => {
	const userId = await getUserIdBySession();

	const req = await axios
		.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/profile/getuserchats', {
			userId,
		})
		.catch((err) => {
			throw new Error('Error during getting user chats');
		});

	return sortChatsByTimestamp(req.data);
};
