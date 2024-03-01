import { SignUpUser } from '@/types/userTypes';
import { getSessionFromRequest, setNewSession } from '../sessionUtils';
import { NextResponse } from 'next/server';
import axios from 'axios';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
	const body = await request.json();
	const user = body.user;
	return await sendLogInRequest(user);
}

const sendLogInRequest = async (user: SignUpUser) => {
	try {
		const logInResponse = await axios.post(
			process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/user/login',
			{ user }
		);

		const newSession = await getSessionFromRequest(logInResponse);
		setNewSession(newSession);

		return NextResponse.json('success', { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.response.data.message, { status: 400 });
	}
};
