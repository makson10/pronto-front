export type Profile = {
	profileId: number;
	name: string;
	age: number | null;
	dateOfBirth: string | null;
	description: string | null;
	createdAt: string;
	city: string | null;
	isVerifed: boolean;
	sentVerificationRequest: boolean;
	icon: string | null;
	isAuthorWatchProfile?: boolean;
	presents: Presents;
};
