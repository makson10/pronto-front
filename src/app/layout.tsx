import { PropsWithChildren } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@/styles/button.css';
import '@/styles/globals.css';
import '@/styles/scrollbar.css';
import '@/styles/variables.css';
import 'swiper/css/bundle';
import CustomThemeProvider from '@/components/common/CustomThemeProvider';
import { getUserDataBySession } from '@/store/user/userUtils';
import { getProfile } from '@/store/profile/profileUtils';
import StoreProvider from '@/store/StoreProvider';

const RootLayout = async ({ children }: PropsWithChildren) => {
	const user = await getUserDataBySession();
	const profile = user?.id ? await getProfile(user.id) : null;

	// TODO:
	//? not set user up in store if it returns error
	//? fix eslint warnings
	//? hide No posts yet title when NewPostForm is open

	//* rewrite component to mui
	//? add swagger on backend
	//? make nestjs refactoring
	//? add cypress testing

	//? move image upload to backend
	//? solve bug with non disconnecting socket
	//? make chat list in db
	//? make chat object in state manager for chat
	//? make input not to send request twice

	return (
		<html lang="en">
			<head>
				<title>pronto</title>
				<link rel="icon" type="image/x-icon" href="/short_logo.png" />
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</head>
			<body>
				<div id="portal" className="fixed z-[101] w-screen" />
				<StoreProvider user={user} profile={profile}>
					<CustomThemeProvider>{children}</CustomThemeProvider>
				</StoreProvider>
			</body>
		</html>
	);
};

export default RootLayout;
