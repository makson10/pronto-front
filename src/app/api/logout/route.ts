import {
	deleteSession,
	formCookieForSending,
	getSessionIdFromCookie,
} from '../sessionUtils';
import axios from 'axios';

export const dynamic = 'force-dynamic';

export async function POST() {
	const logOutResponse = await sendLogOutRequest();
	if (!logOutResponse.data.okay) return new Response('error', { status: 400 });

	deleteSession();
	return new Response('success', { status: 200 });
}

const sendLogOutRequest = async () => {
	const sessionId = getSessionIdFromCookie();
	if (!sessionId) throw new Error('No session id given');
	const cookieForSending = formCookieForSending(sessionId);

	return await axios.post(
		process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/user/logout',
		null,
		{ headers: { Cookie: cookieForSending } }
	);
};
