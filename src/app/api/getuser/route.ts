import { encodeCookie, getSessionIdFromCookie } from '../sessionUtils';
import axios from 'axios';

export const dynamic = 'force-dynamic';

export const POST = async () => {
	const sessionId = getSessionIdFromCookie();
	if (!sessionId) return null;
	const cookieForSending = encodeCookie('sessionId', sessionId);

	const user = await sendGetUserRequest(cookieForSending);
	return Response.json(user, { status: 200 });
}

const sendGetUserRequest = async (cookie: string) => {
	const req = await axios.post(
		process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL +
			'/user/getuserdatabysession',
		null,
		{
			headers: { Cookie: cookie },
		}
	);

	return req.data;
};
