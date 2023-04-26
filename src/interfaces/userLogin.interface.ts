export interface UserLoginInterface {
	email: string;
	password: string;
}

interface User {
	name: string;
	email: string;
	role: string;
	status: boolean;
	uid: string;
}
export interface AuthUser {
	user: User;
	token: string;
	errors?: any;
}
