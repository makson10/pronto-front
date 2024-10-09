export type Message = {
	messageId: number;
	senderId: number;
	recieverId: number;
	text: string;
	image: string | null;
	timestamp: string;
	wasReaded: boolean;
};
