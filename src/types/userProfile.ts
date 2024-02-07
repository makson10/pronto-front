export type UserProfile = {
	profileId: number;
	name: string;
	age: number | null;
	dateOfBirth: string | null;
	description: string | null;
	createdAt: string;
	city: string | null;
	verifedUser: boolean;
	icon: string | null;
};
