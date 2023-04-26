export interface AuthFormData {
	email: string;
	password: string;
	confirmPassword?: string | undefined;
	acceptTerms?: boolean;
}

export interface AuthProps {
	type: 'login' | 'register';
	onSubmit: (data: AuthFormData) => void;
}

interface ApiErrorResponse {
	error?: Error | unknown;
	msg?: string;
}

export type ApiResponse<T> = T | ApiErrorResponse;
