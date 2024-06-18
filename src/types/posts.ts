export type Post = {
	authorId: number;
	authorFullName: string;
	createdAt: string;
	text: string;
	picture: string | null;
};

export type Posts = Post[];
