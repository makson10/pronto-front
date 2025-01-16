import { PropsWithChildren } from 'react';
import '@/styles/button.css';
import '@/styles/globals.css';
import '@/styles/scrollbar.css';
import '@/styles/variables.css';
import 'swiper/css/bundle';
import CustomNextUIProvider from '@/components/common/CustomNextUIProvider';
import { getUserDataBySession } from '@/store/user/userUtils';
import { getProfile } from '@/store/profile/profileUtils';
import StoreProvider from '@/store/StoreProvider';

const RootLayout = async ({ children }: PropsWithChildren) => {
	const user = await getUserDataBySession();
	const profile = user?.id ? await getProfile(user.id) : null;

	// TODO:
	//! return from backend and store profile after signup/login user
	//? not set user up in store if it returns error
	//? fix eslint warnings
	//? make good looking error page
	//? hide No posts yet title when NewPostForm is open

	//? rewrite component to mui
	//? add cypress testing
	//? add swagger on backend
	//? make nestjs refactoring

	//? solve bug with non disconnecting socket
	//? make chat list in db
	//? make chat object in state manager for chat
	//? make input not to send request twice

	return (
		<html lang="en">
			<head>
				<title>pronto</title>
				<link rel="icon" type="image/x-icon" href="/short_logo.png" />
			</head>
			<body>
				<div id="portal" className="fixed z-[101] w-screen" />
				<StoreProvider user={user} profile={profile}>
					<CustomNextUIProvider>{children}</CustomNextUIProvider>
				</StoreProvider>
			</body>
		</html>
	);
};

export default RootLayout;
