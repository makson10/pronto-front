import { SignUpUser } from '@/types/user';
import {
	extructSessionFromRequest,
	setNewSession,
} from '@/assets/sessionUtils';
import { NextResponse } from 'next/server';
import axios from 'axios';

export const dynamic = 'force-dynamic';

export const POST = async (request: Request) => {
	const body = await request.json();
	const user = body.user;
	return await sendLogInRequest(user);
};

const sendLogInRequest = async (user: SignUpUser) => {
	try {
		const logInResponse = await axios.post(
			process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/user/login',
			{ user },
		);

		const session = await extructSessionFromRequest(logInResponse);
		setNewSession(session);

		return NextResponse.json(logInResponse.data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.response.data.message, { status: 400 });
	}
};
