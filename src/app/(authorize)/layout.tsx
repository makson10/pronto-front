import Footer from '@/components/Footer';
import FormHeader from '@/components/FormHeader';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<div className="flex flex-col min-h-screen">
			<FormHeader />
			<div className="flex-[2_1_auto] flex flex-col justify-center items-center">
				{children}
			</div>
			<Footer />
		</div>
	);
}
