import { NextResponse } from "next/server";

const THREAT_LEVELS = ["SAFE", "LOW", "ELEVATED", "CRITICAL"] as const;

interface ScanRequest {
	vector?: string;
	intelId?: string;
	payload?: unknown;
}

export async function POST(request: Request) {
	try {
		const { vector = "unknown", intelId = "N/A", payload }: ScanRequest =
			await request.json().catch(() => ({}));

		const score = Math.floor(Math.random() * 100);
		const threatLevel =
			score > 85
				? THREAT_LEVELS[3]
			: score > 60
				? THREAT_LEVELS[2]
			: score > 35
				? THREAT_LEVELS[1]
			: THREAT_LEVELS[0];

		const report = {
			protocol: "SENTINEL_SCAN_V4",
			intelId,
			vector,
			threatLevel,
			score,
			flags:
				score > 60
					? ["ANOMALY_BEHAVIOR", "DEEP_PACKET_ANALYSIS"]
					: ["STANDARD_BASELINE"],
			payloadPreview: typeof payload === "string" ? payload.slice(0, 120) : null,
			timestamp: Date.now(),
		};

		return NextResponse.json(report);
	} catch (error) {
		return NextResponse.json(
			{ error: "Scan failure", details: error instanceof Error ? error.message : "Unknown" },
			{ status: 500 }
		);
	}
}

export async function GET() {
	return NextResponse.json({
		protocol: "SENTINEL_SCAN_V4",
		status: "READY",
		timestamp: Date.now(),
		threatMatrix: THREAT_LEVELS,
	});
}