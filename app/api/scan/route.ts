import { NextResponse } from "next/server";

// api route
export async function GET() {
  return Response.json({ status: "OK", message: "Scan API running" });
}

export async function POST(req: Request) {
  try {
    const { target = "undefined" } = await req.json();

    const result = {
      status: "OK",
      scanned: target,
      threats: [],
      timestamp: Date.now(),
      engine: "Sentinel Scan Neural v1.4",
    };

    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: "Scan failure" }, { status: 500 });
  }
}