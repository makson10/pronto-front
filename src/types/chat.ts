export type Chat = {
	chatId: number;
	companionId: number;
	companionName: string;
	chatIcon: string;
	lastMessageText: string;
	lastMessageTimestamp: string;
};

export type Chats = Chat[];

export type Message = {
	messageId: number;
	senderId: number;
	recieverId: number;
	text: string;
	image: string | null;
	timestamp: string;
	wasReaded: boolean;
};
