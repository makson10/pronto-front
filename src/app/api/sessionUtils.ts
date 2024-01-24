import { cookies } from 'next/headers';
import { CookieSerializeOptions } from 'cookie';
import * as cookie from 'cookie';
import { AxiosResponse } from 'axios';

export const sessionCookieOptions: CookieSerializeOptions = {
	secure: process.env.NODE_ENV === 'production',
	maxAge: 28 * 24 * 60 * 60,
};

export const getSessionFromRequest = async (request: AxiosResponse) => {
	const signUpRequestCookie = request.headers['set-cookie']?.find((cookie) =>
		cookie.match(/^sessionId/gim)
	);

	return cookie.parse(signUpRequestCookie!).sessionId;
};

export const setNewSession = (sessionId: string) => {
	cookies().set('sessionId', sessionId, sessionCookieOptions);
};

export const getSessionIdFromCookie = () => {
	const sessionCookie = cookies().get('sessionId');
	return sessionCookie?.value ? sessionCookie?.value : null;
};

export const formCookieForSending = (sessionId: string) => {
	return cookie.serialize('sessionId', sessionId);
};

export const deleteSession = () => {
	cookies().delete('sessionId');
};

export const getUserData = async () => {
	const sessionId = getSessionIdFromCookie();
	if (!sessionId) return null;
	const cookieForSending = formCookieForSending(sessionId);

	const req = await fetch(
		process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/user/getuserdata',
		{
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				Cookie: cookieForSending,
			},
			// cache: 'force-cache',
			next: { revalidate: 3600, tags: ['getUserRequest'] },
		}
	);

	const user = await req.json();
	return user;
};
