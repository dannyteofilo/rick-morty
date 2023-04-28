import { ApiResponse } from '../interfaces/Authprops.interface';
import { UserLoginInterface } from '../interfaces/userLogin.interface';

export async function post<T>(url: string, body: UserLoginInterface): Promise<ApiResponse<T>> {
	try {
		const resp = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		return await resp.json();
	} catch (error) {
		console.error(error);
		return { error, msg: 'Failed request' };
	}
}

export async function authRequest(endPoint:string,user: UserLoginInterface): Promise<ApiResponse<unknown>> {
	const url = `${process.env.REACT_APP_API}api/${endPoint}`;
	return post(url, user);
}


export const getCharacters = async (data: string) => {
	const url = `${process.env.REACT_APP_API_BASE_URL}api/character/${data}`;
	try {
		const resp: any = await fetch(url);
		return await resp.json();
	} catch (error) {
		console.error(error);
	}
};
