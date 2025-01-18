import { encodeCookie, getSessionIdFromCookie } from '@/assets/sessionUtils';
import axios from 'axios';

export const dynamic = 'force-dynamic';

export const POST = async () => {
	const sessionId = await getSessionIdFromCookie();
	if (!sessionId) return new Response('No session was found', { status: 400 });
	const cookieForSending = encodeCookie('sessionId', sessionId);

	const user = await sendGetUserRequest(cookieForSending);
	return Response.json(user, { status: 200 });
};

const sendGetUserRequest = async (cookie: string) => {
	const req = await axios.post(
		process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/user/getuserdatabysession',
		null,
		{
			headers: { Cookie: cookie },
		},
	);

	return req.data;
};
