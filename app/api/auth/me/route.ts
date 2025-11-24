import { NextResponse } from "next/server";
import { verifyToken, findUserById, getUserWithoutPassword } from "../utils";

export async function GET(request: Request) {
	try {
		// Get token from Authorization header
		const authHeader = request.headers.get("authorization");
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return NextResponse.json(
				{ error: "No authorization token provided" },
				{ status: 401 }
			);
		}

		const token = authHeader.substring(7); // Remove "Bearer " prefix

		// Verify token
		const payload = verifyToken(token);
		if (!payload) {
			return NextResponse.json(
				{ error: "Invalid or expired token" },
				{ status: 401 }
			);
		}

		// Find user
		const user = findUserById(payload.userId);
		if (!user) {
			return NextResponse.json(
				{ error: "User not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json({
			user: getUserWithoutPassword(user),
		});
	} catch (error) {
		console.error("Get user error:", error);
		return NextResponse.json(
			{
				error: "Failed to get user info",
				details: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 }
		);
	}
}
