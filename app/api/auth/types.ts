export interface User {
	id: string;
	email: string;
	username: string;
	passwordHash: string;
	createdAt: number;
}

export interface UserRegistration {
	email: string;
	username: string;
	password: string;
}

export interface UserLogin {
	email: string;
	password: string;
}

export interface AuthResponse {
	token: string;
	user: {
		id: string;
		email: string;
		username: string;
	};
}

export interface TokenPayload {
	userId: string;
	email: string;
	username: string;
}
