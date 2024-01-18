import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';
import {
	formCookieForSending,
	getSessionIdFromCookie,
} from './api/sessionUtils';
import axios from 'axios';
import { FullUser } from '@/types/userTypes';

export default async function Home() {
	const user = await getUserData();
	console.log(user);

	return (
		<div className="flex flex-col min-h-screen">
			<MainHeader />
			<Footer />
		</div>
	);
}

const getUserData = async () => {
	const sessionId = getSessionIdFromCookie();
	if (!sessionId) return null;
	const cookieForSending = formCookieForSending(sessionId);

	const user: FullUser = await axios
		.post(
			process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/user/getuserdata',
			null,
			{ headers: { Cookie: cookieForSending } }
		)
		.then((res) => res.data);

	return user;
};
