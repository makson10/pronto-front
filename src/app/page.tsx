import Footer from '@/components/Footer';
import MainHeader from '@/components/MainHeader';

export default async function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<MainHeader />
			<Footer />
		</div>
	);
}
