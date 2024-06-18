import { FullUser } from './user';

export interface Store {
	user: FullUser | null;
	setInitialValues?: () => void;
}
