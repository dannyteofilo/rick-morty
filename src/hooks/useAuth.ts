import { useState } from 'react';
import { authRequest } from '../helpers/request';
import { UserLoginInterface } from '../interfaces/userLogin.interface';
import { useAppContext } from './useAppContext';
import { ApiResponse } from '../interfaces/Authprops.interface';

export const useAuth = () => {
	const { setUser, setLoading } = useAppContext();
	const [ errorRequest, setErrorRequest ] = useState<string | null>(null);

	const handleRequest = (url: string, data: UserLoginInterface) => {
		errorRequest && setErrorRequest(null);
		setLoading(true);
		authRequest(url, data).then((resp: ApiResponse<any>) => {
			if (resp.error) {
				setErrorRequest(resp.error.errors ? resp.error.errors.map((e: any) => e.msg) : resp.msg);
			} else {
				setUser(resp);
			}
			setLoading(false);
		});
	};

	const handleSignUp = (data: UserLoginInterface) => {
		handleRequest('users', data);
	};

	const handleSignIn = (data: UserLoginInterface) => {
		handleRequest('auth/login', data);
	};

	return {
		handleSignUp,
		handleSignIn,
		errorRequest
	};
};
