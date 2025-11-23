import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { dataset = "unknown" } = await req.json();

    const analysis = {
      ai: "Sentinel Behavior AI v2.1",
      anomalies: Math.random() > 0.85 ? ["Suspicious sync pattern"] : [],
      score: Math.floor(Math.random() * 100),
      dataset,
      timestamp: Date.now(),
    };

    return NextResponse.json(analysis);
  } catch (e) {
    return NextResponse.json({ error: "Analysis error" }, { status: 500 });
  }
}