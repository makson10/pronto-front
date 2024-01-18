import { cookies } from 'next/headers';
import { AxiosResponse } from 'axios';
import * as cookie from 'cookie';

export const sessionCookieOptions: cookie.CookieSerializeOptions = {
	secure: process.env.NODE_ENV === 'production',
	maxAge: 28 * 24 * 60 * 60,
};

export const getSessionFromRequest = async (request: AxiosResponse) => {
	const signUpRequestCookie = request.headers['set-cookie']?.find((cookie) =>
		cookie.match(/^session/gim)
	);

	return cookie.parse(signUpRequestCookie!).session;
};

export const setNewSession = (sessionId: string) => {
	cookies().set('session', sessionId, sessionCookieOptions);
};

export const getSessionIdFromCookie = () => {
	const sessionCookie = cookies().get('session');
	return sessionCookie?.value ? sessionCookie?.value : null;
};

export const formCookieForSending = (sessionId: string | null) => {
	return sessionId ? cookie.serialize('sessionId', sessionId) : null;
};

export const deleteSession = () => {
	cookies().delete('session');
};
