import { UserProfile } from './userProfile';

export interface MainProps {
	profile: UserProfile;
}

export interface NameProps {
	data: {
		name: string;
		verifedUser: boolean;
		createdAt: string;
	};
}

export interface DescriptionProps {
	description: string;
}

export interface AddressProps {
	city: string;
}
