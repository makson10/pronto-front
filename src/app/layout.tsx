import '@/styles/globals.css';
import '@/styles/variables.css';
import { getUserDataBySession } from './api/sessionUtils';
import StoreInitializer from '@/context/StoreInitializer';

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = await getUserDataBySession();
	const storeInitialValues = {
		user,
	};

	return (
		<html lang="en">
			<head>
				<title>pronto</title>
				<link rel="icon" type="image/x-icon" href="/short_logo.png" />
			</head>
			<body>
				<StoreInitializer initialValues={storeInitialValues} />
				{children}
			</body>
		</html>
	);
}
