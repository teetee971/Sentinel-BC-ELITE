import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { User, TokenPayload } from "./types";

// In-memory user storage (for demonstration - replace with database in production)
// Use global to persist across hot module reloads in development
const globalForUsers = global as unknown as {
	users: User[] | undefined;
};

const users: User[] = globalForUsers.users ?? [];
globalForUsers.users = users;

const JWT_SECRET = process.env.JWT_SECRET || "sentinel-bc-elite-secret-key-change-in-production";
const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
	return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(
	password: string,
	hash: string
): Promise<boolean> {
	return bcrypt.compare(password, hash);
}

export function generateToken(user: User): string {
	const payload: TokenPayload = {
		userId: user.id,
		email: user.email,
		username: user.username,
	};
	return jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
}

export function verifyToken(token: string): TokenPayload | null {
	try {
		return jwt.verify(token, JWT_SECRET) as TokenPayload;
	} catch {
		return null;
	}
}

export function findUserByEmail(email: string): User | undefined {
	return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function findUserById(id: string): User | undefined {
	return users.find((u) => u.id === id);
}

export function createUser(
	email: string,
	username: string,
	passwordHash: string
): User {
	const user: User = {
		id: crypto.randomUUID(),
		email: email.toLowerCase(),
		username,
		passwordHash,
		createdAt: Date.now(),
	};
	users.push(user);
	return user;
}

export function getUserWithoutPassword(user: User) {
	return {
		id: user.id,
		email: user.email,
		username: user.username,
	};
}
