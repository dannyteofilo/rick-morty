import { useState } from 'react';
import { registerRequest } from '../helpers/request';
import { UserLoginInterface } from '../interfaces/userLogin.interface';
import { useAppContext } from './useAppContext';

export const useAuth = () => {
	const { setUser, setLoading } = useAppContext();
	const [ errorRequest, setErrorRequest ] = useState<string | null>(null);

	const handleSignUp = (data: UserLoginInterface) => {
		errorRequest && setErrorRequest(null);
		setLoading(true);
		registerRequest(data).then((resp) => {
			if (resp.error) {
				setErrorRequest(resp.error.errors ? resp.error.errors.map((e: any) => e.msg) : resp.msg);
			} else {
				setUser(resp);
			}
			setLoading(false);
		});
	};

	return {
		handleSignUp,
		errorRequest
	};
};
