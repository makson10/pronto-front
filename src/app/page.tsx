import Footer from '@/components/Footer';
import MainHeader from '@/components/MainHeader/MainHeader';
import Homepage from './homepage/homepage';

export default async function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<MainHeader />
			<Homepage />
			<Footer />
		</div>
	);
}
