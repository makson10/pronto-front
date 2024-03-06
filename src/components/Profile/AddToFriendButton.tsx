'use client';

export default function AddToFriendButton() {
	const handleClick = () => {
		console.log('fucking clicked');
	};

	return (
		<button
			className="min-w-[142px] bg-white text-black font-bold py-2 px-4 rounded transition duration-200 ease-in-out hover:bg-gray-300"
			onClick={handleClick}
			aria-label="add-to-friend-button">
			Add to friends
		</button>
	);
}
