export interface SignUpUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface LoginUser {
	email: string;
	password: string;
}

export type FullUser = {
	id: number;
	firstName: string;
	lastName: string;
	fullName: string;
	createdAt: string;
	email: string;
	password: string;
};
