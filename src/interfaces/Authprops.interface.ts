export interface AuthFormData {
	email: string;
	password: string;
	confirmPassword?: string | undefined;
	acceptTerms?: boolean;
}

export interface AuthProps {
	type: 'login' | 'register';
	showAlert: boolean;
	msgError: string;
	onSubmit: (data: AuthFormData) => void;
	onCloseAlert: () => void;
}
