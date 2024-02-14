import { Profile } from './profile';

export interface MainProps {
	profile: Profile;
}

export interface NameProps {
	data: {
		name: string;
		isVerifed: boolean;
		createdAt: string;
	};
}

export interface DescriptionProps {
	description: string | null;
}

export interface AddressProps {
	city: string | null;
}
