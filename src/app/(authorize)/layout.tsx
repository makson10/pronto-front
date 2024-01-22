import Footer from '@/components/Footer';
import FormHeader from '@/components/FormHeader';

export default function Layout({ children }: { children: React.ReactHTML }) {
	return (
		<div className="flex flex-col min-h-screen">
			<FormHeader />
			<>{children}</>
			<Footer />
		</div>
	);
}
