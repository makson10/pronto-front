'use client';

export default function AddToFriendButton() {
	const handleClick = () => {
		console.log('fucking clicked');
	};

	return (
		<button
			className="bg-white text-black font-bold py-2 px-4 rounded transition duration-200 ease-in-out hover:bg-gray-300"
			onClick={handleClick}>
			Add to friends
		</button>
	);
}
