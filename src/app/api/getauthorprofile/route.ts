import { Profile } from '@/types/profile';
import axios from 'axios';

export const dynamic = 'force-dynamic';

export const POST = async (request: Request) => {
	const authorId = await request.json();
	const user = await sendGetUserByIdRequest(authorId);
	return Response.json(user, { status: 200 });
};

const sendGetUserByIdRequest = async (authorId: string) => {
	try {
		return await axios
			.post<Profile>(
				process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/profile/getprofile',
				{ userId: authorId }
			)
			.then((res) => res.data);
	} catch (error) {
		throw new Error('Error during request');
	}
};
