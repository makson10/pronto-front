import { formCookieForSending, getSessionIdFromCookie } from '../sessionUtils';
import axios from 'axios';

export const dynamic = 'force-dynamic';

export async function POST() {
	const sessionId = getSessionIdFromCookie();
	if (!sessionId) return null;
	const cookieForSending = formCookieForSending(sessionId);

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
