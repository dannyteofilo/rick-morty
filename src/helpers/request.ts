import { UserLoginInterface } from '../interfaces/userLogin.interface';

export const singInRequest = async (user: UserLoginInterface) => {
	const url = `${process.env.REACT_APP_API}api/auth/login`;
	try {
		const resp: any = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});
		return await resp.json();
	} catch (error) {
		console.error(error);
	}
};

export const registerRequest = async (user: UserLoginInterface) => {
	const url = `${process.env.REACT_APP_API}api/users`;
	try {
		const resp: any = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});
		return await resp.json();
	} catch (error) {
		console.error(error);
		return { error, msg: 'Failed request' };
	}
};

export const getCharacters = async (data: string) => {
	const url = `${process.env.REACT_APP_API_BASE_URL}api/character/${data}`;
	try {
		const resp: any = await fetch(url);
		return await resp.json();
	} catch (error) {
		console.error(error);
	}
};
