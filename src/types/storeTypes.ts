import { FullUser } from './userTypes';

export interface Store {
	user: FullUser | null;
}
