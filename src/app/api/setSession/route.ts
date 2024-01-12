import { cookies } from 'next/headers';
import * as cookie from 'cookie';
import axios, { AxiosResponse } from 'axios';
import { SignUpUser } from '@/types/userTypes';
import { CookieSerializeOptions } from 'cookie';

export const dynamic = 'force-dynamic';

const sessionCookieOptions: CookieSerializeOptions = {
	secure: true,
	httpOnly: true,
	maxAge: 28 * 24 * 60 * 60,
};

export async function GET() {
	const rawSessionData = cookies().get('session')?.value;
	if (!rawSessionData) return new Response('error', { status: 400 });

	const parsedSession = JSON.parse(rawSessionData!);
	return Response.json(parsedSession, { status: 200 });
}

export async function POST(request: Request) {
	const user = await request.json().then((data) => data.user);
	const signUpRequest = await sendSignUpRequest(user);
	if (!signUpRequest.data.okay) return new Response('error', { status: 400 });

	const userSession = await getUserSessionFromRequest(signUpRequest);
	setNewUserSession(userSession);
	return new Response('success', { status: 200 });
}

const sendSignUpRequest = async (user: SignUpUser) => {
	return await axios.post(
		process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/user/signup',
		{ user },
		{ withCredentials: true }
	);
};

const getUserSessionFromRequest = async (request: AxiosResponse) => {
	const signUpRequestCookie = request.headers['set-cookie']?.find((cookie) =>
		cookie.match(/^session/gim)
	);

	const rawUserSession = cookie.parse(signUpRequestCookie!).session;
	return rawUserSession.replace('j:', '');
};

const setNewUserSession = (session: string) => {
	cookies().set('session', session, sessionCookieOptions);
};
