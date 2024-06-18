import { useRouter } from 'next/navigation';

const usePageNavigation = () => {
	const router = useRouter();

	const goToHomePage = () => router.push('/');
	const refreshPage = () => router.refresh();
	const goToPage = (path: string) => router.push(path);

	return { goToHomePage, refreshPage, goToPage };
};

export default usePageNavigation;
