import '@/styles/button.scss';
import '@/styles/globals.scss';
import '@/styles/scrollbar.scss';
import '@/styles/variables.scss';
import 'swiper/css/bundle';
import CustomNextUIProvider from '@/components/common/CustomNextUIProvider';
import StoreProvider from '@/store/StoreProvider';
import { getProfile, getUserDataBySession } from '@/assets/sessionUtils';

interface Props {
	children: React.ReactNode;
}

const RootLayout = async ({ children }: Props) => {
	const user = await getUserDataBySession();
	const profile = await getProfile(user?.id!);

	// TODO:
	//? end up making requestedProfileSlice and /profile/[profileId] page
	//? make pre-commit testing
	//? migrate to rtk
	//? add cypress testing
	//? rewrite component to mui
	//? add swagger on backend
	//? make nestjs refactoring

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
				<StoreProvider user={user} profile={profile}>
					<CustomNextUIProvider>{children}</CustomNextUIProvider>
				</StoreProvider>
			</body>
		</html>
	);
};

export default RootLayout;
