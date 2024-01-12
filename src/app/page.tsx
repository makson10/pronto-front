import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<MainHeader />
			<Footer />
		</div>
	);
}
