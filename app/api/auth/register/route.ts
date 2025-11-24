import { NextResponse } from "next/server";
import type { UserRegistration, AuthResponse } from "../types";
import {
	hashPassword,
	findUserByEmail,
	createUser,
	generateToken,
	getUserWithoutPassword,
} from "../utils";

export async function POST(request: Request) {
	try {
		const body: UserRegistration = await request.json();

		// Validate required fields
		if (!body.email || !body.username || !body.password) {
			return NextResponse.json(
				{ error: "Email, username, and password are required" },
				{ status: 400 }
			);
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(body.email)) {
			return NextResponse.json(
				{ error: "Invalid email format" },
				{ status: 400 }
			);
		}

		// Validate password strength (minimum 8 characters)
		if (body.password.length < 8) {
			return NextResponse.json(
				{ error: "Password must be at least 8 characters long" },
				{ status: 400 }
			);
		}

		// Validate username (alphanumeric and underscores only, 3-20 chars)
		const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
		if (!usernameRegex.test(body.username)) {
			return NextResponse.json(
				{
					error:
						"Username must be 3-20 characters and contain only letters, numbers, and underscores",
				},
				{ status: 400 }
			);
		}

		// Check if user already exists
		const existingUser = findUserByEmail(body.email);
		if (existingUser) {
			return NextResponse.json(
				{ error: "User with this email already exists" },
				{ status: 409 }
			);
		}

		// Hash password and create user
		const passwordHash = await hashPassword(body.password);
		const user = createUser(body.email, body.username, passwordHash);

		// Generate JWT token
		const token = generateToken(user);

		const response: AuthResponse = {
			token,
			user: getUserWithoutPassword(user),
		};

		return NextResponse.json(response, { status: 201 });
	} catch (error) {
		console.error("Registration error:", error);
		return NextResponse.json(
			{
				error: "Registration failed",
				details: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 }
		);
	}
}
