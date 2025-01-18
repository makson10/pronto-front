import { cookies } from 'next/headers';
import * as cookie from 'cookie';
import { AxiosResponse } from 'axios';

export const sessionCookieOptions: cookie.CookieSerializeOptions = {
	secure: process.env.NODE_ENV === 'production',
	maxAge: 28 * 24 * 60 * 60,
};

export const extructSessionFromRequest = async (request: AxiosResponse) => {
	const signUpRequestCookie = request.headers['set-cookie']?.find((cookie) =>
		cookie.match(/^sessionId/gim),
	);

	return cookie.parse(signUpRequestCookie!).sessionId;
};

export const setNewSession = async (sessionId: string) => {
	const cookieStore = await cookies();
	cookieStore.set('sessionId', sessionId, sessionCookieOptions);
};

export const getSessionIdFromCookie = async () => {
	const cookieStore = await cookies();
	const sessionCookie = cookieStore.get('sessionId');
	return sessionCookie?.value ? sessionCookie?.value : null;
};

export const encodeCookie = (key: string, value: string) => {
	return cookie.serialize(key, value);
};

export const deleteSession = async () => {
	const cookieStore = await cookies();
	cookieStore.delete('sessionId');
};
