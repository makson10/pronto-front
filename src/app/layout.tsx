import '@/styles/globals.scss';
import '@/styles/variables.scss';
import { getUserDataBySession } from './api/sessionUtils';
import StoreInitializer from '@/context/StoreInitializer';
import CustomNextUIProvider from '@/components/CustomNextUIProvider';

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = await getUserDataBySession();
	const storeInitialValues = {
		user,
	};

	// TODO:
	//? split UserInfo.tsx to few files
	//? add icon to main header
	//? delete old user icons

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
}
