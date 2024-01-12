import './globals.css';
import axios from 'axios';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	axios.defaults.withCredentials = true;

	return (
		<html lang="en">
			<head>
				<title>pronto</title>
				<link rel="icon" type="image/x-icon" href="/short_logo.png" />
			</head>
			<body>{children}</body>
		</html>
	);
}
