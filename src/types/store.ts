import { Profile } from './profile';
import { FullUser } from './user';

export interface Store {
	user: FullUser | null;
	profile: Profile | null;
	setInitialValues?: () => void;
}
