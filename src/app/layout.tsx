import '@/styles/button.scss';
import '@/styles/globals.scss';
import '@/styles/scrollbar.scss';
import '@/styles/variables.scss';
import '@/styles/detailInfo.scss';
import { getUserDataBySession } from './api/sessionUtils';
import StoreInitializer from '@/context/StoreInitializer';
import CustomNextUIProvider from '@/components/CustomNextUIProvider';

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	const user = await getUserDataBySession();
	const storeInitialValues = { user };

	//? add presents to user
	//? add adding picture to posts
	//? change browser page title depending on current route
	//? solve all bugs

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
