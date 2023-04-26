import { Dispatch } from 'react';
import { CharactersInterface } from './Characters.interface';
import { AuthUser } from './userLogin.interface';

export interface AuthContextProps {
	user: AuthUser | null;
	setUser: Dispatch<AuthUser>;
	characters: Array<CharactersInterface>;
	setCharacters: Dispatch<Array<CharactersInterface>>;
	setLoading: Dispatch<boolean>;
	loading: boolean;
}
