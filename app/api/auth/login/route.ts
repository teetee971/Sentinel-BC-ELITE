import { NextResponse } from "next/server";
import type { UserLogin, AuthResponse } from "../types";
import {
	comparePassword,
	findUserByEmail,
	generateToken,
	getUserWithoutPassword,
} from "../utils";

export async function POST(request: Request) {
	try {
		const body: UserLogin = await request.json();

		// Validate required fields
		if (!body.email || !body.password) {
			return NextResponse.json(
				{ error: "Email and password are required" },
				{ status: 400 }
			);
		}

		// Find user by email
		const user = findUserByEmail(body.email);
		if (!user) {
			return NextResponse.json(
				{ error: "Invalid email or password" },
				{ status: 401 }
			);
		}

		// Verify password
		const isPasswordValid = await comparePassword(body.password, user.passwordHash);
		if (!isPasswordValid) {
			return NextResponse.json(
				{ error: "Invalid email or password" },
				{ status: 401 }
			);
		}

		// Generate JWT token
		const token = generateToken(user);

		const response: AuthResponse = {
			token,
			user: getUserWithoutPassword(user),
		};

		return NextResponse.json(response);
	} catch (error) {
		console.error("Login error:", error);
		return NextResponse.json(
			{
				error: "Login failed",
				details: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 }
		);
	}
}
