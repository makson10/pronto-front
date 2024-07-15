const estimateDayFromPost = (postDate: Date) => {
	return Math.floor((+new Date() - +postDate) / (1000 * 60 * 60 * 24));
};

const getFullPostDate = (postDate: Date) => {
	const todayDate = new Date();
	let shownDate = '';

	shownDate += postDate.getDate() + ' ';
	shownDate += postDate.toLocaleString('en', { month: 'long' });
	if (todayDate.getFullYear() !== postDate.getFullYear()) {
		shownDate += ' ' + postDate.getFullYear();
	}

	return shownDate;
};

export const formatDate = (timestamp: string) => {
	const postDate = new Date(timestamp);
	const dayFromPost = estimateDayFromPost(postDate);

	if (dayFromPost < 1) {
		return 'Today';
	}

	if (dayFromPost >= 1 && dayFromPost < 3) {
		return `${dayFromPost} days ago`;
	}

	return getFullPostDate(postDate);
};
