import '@/styles/button.scss';
import '@/styles/globals.scss';
import '@/styles/scrollbar.scss';
import '@/styles/variables.scss';
import 'swiper/css/bundle';
import { getUserDataBySession } from '@/assets/sessionUtils';
import StoreInitializer from '@/context/StoreInitializer';
import CustomNextUIProvider from '@/components/CustomNextUIProvider';
import { store } from '@/context/store';

interface Props {
	children: React.ReactNode;
}

const RootLayout = async ({ children }: Props) => {
	const user = await getUserDataBySession();
	const profile = store.getState().profile;

	if (user && profile)
		profile.isAuthorWatchProfile = user.id === profile?.profileId;
	const storeInitialValues = { user, profile };

	// TODO:
	//? fix log in double tab tap bug
	//? make editDescription without enter
	//? merge feature and main branch

	return (
		<html lang="en">
			<head>
				<title>pronto</title>
				<link rel="icon" type="image/x-icon" href="/short_logo.png" />
			</head>
			<body>
				<div id="portal" className="fixed z-[101] w-screen" />
				<CustomNextUIProvider>
					<StoreInitializer initialValues={storeInitialValues} />
					{children}
				</CustomNextUIProvider>
			</body>
		</html>
	);
};

export default RootLayout;
