import { useRouter } from 'next/navigation';

export default function usePageNavigation() {
	const router = useRouter();

	const goToHomePage = () => router.push('/');
	const refreshPage = () => router.refresh();

	return { goToHomePage, refreshPage };
}
