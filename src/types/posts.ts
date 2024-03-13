export type Post = {
	authorId: number;
	createdAt: string;
	text: string;
	picture: string | null;
};

export type Posts = Post[];
