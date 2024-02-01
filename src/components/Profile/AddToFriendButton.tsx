'use client';

export default function AddToFriendButton() {
	const handleClick = () => {
		console.log('fucking clicked');
	};

	return (
		<button
			className="bg-white text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
			onClick={handleClick}>
			Add to friends
		</button>
	);
}
