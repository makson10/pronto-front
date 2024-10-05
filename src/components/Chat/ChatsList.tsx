import ChatItem from './ChatItem';

const ChatsList = async () => {
	return (
		<div className="w-[30%] bg-[#503C3C]">
			<div className="min-w-full flex justify-center items-center text-white text-lg">
				<ChatItem name="Maks 2" lastMessage="fuck" id={23884065} />
			</div>
		</div>
	);
};

export default ChatsList;
