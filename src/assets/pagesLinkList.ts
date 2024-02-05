import { store } from '@/context/store';

const getPagesLinks = () => {
	return [
		{
			title: 'Profile',
			icon: 'https://img.icons8.com/ios/50/ffffff/user-male-circle--v1.png',
			goToPath: '/profile/' + store.getState().user?.id,
		},
		{
			title: 'Games',
			icon: 'https://img.icons8.com/ios/50/ffffff/xbox-controller.png',
			goToPath: '/games',
		},
		{
			title: 'Friend',
			icon: 'https://img.icons8.com/ios/50/ffffff/user-group-man-man.png',
			goToPath: '/friend',
		},
		{
			title: 'Groups',
			icon: 'https://img.icons8.com/ios/50/ffffff/groups.png',
			goToPath: '/groups',
		},
		{
			title: 'Chat',
			icon: 'https://img.icons8.com/ios/50/ffffff/speech-bubble--v1.png',
			goToPath: '/chat',
		},
		{
			title: 'News',
			icon: 'https://img.icons8.com/ios/50/ffffff/news.png',
			goToPath: '/news',
		},
	];
};

export { getPagesLinks };
