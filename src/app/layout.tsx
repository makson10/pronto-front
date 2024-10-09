import '@/styles/button.scss';
import '@/styles/globals.scss';
import '@/styles/scrollbar.scss';
import '@/styles/variables.scss';
import 'swiper/css/bundle';
import { getProfile, getUserDataBySession } from '@/assets/sessionUtils';
import CustomNextUIProvider from '@/components/common/CustomNextUIProvider';
import StoreInitializer from '@/context/StoreInitializer';
import { SessionProvider } from 'next-auth/react';

interface Props {
	children: React.ReactNode;
}

const RootLayout = async ({ children }: Props) => {
	const user = await getUserDataBySession();
	const profile = user && (await getProfile(user!.id));

	if (user && profile)
		profile.isAuthorWatchProfile = user.id === profile?.profileId;
	const storeInitialValues = { user, profile };

	// TODO:
	//? solve bug with non disconnecting socket
	//? make chat list in db
	//? make chat object in state manager for chat
	//? loading during /profile
	//? make input not to send request twice

	return (
		<html lang="en">
			<head>
				<title>pronto</title>
				<link rel="icon" type="image/x-icon" href="/short_logo.png" />
			</head>
			<body>
				<div id="portal" className="fixed z-[101] w-screen" />
				<SessionProvider>
					<CustomNextUIProvider>
						<StoreInitializer initialValues={storeInitialValues} />
						{children}
					</CustomNextUIProvider>
				</SessionProvider>
			</body>
		</html>
	);
};

export default RootLayout;
