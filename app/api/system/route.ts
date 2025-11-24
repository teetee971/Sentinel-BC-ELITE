import { NextResponse } from "next/server";

export async function GET() {
  const sys = {
    core: "Sentinel Neural Core v3.0",
    uptime: process.uptime(),
    memory: process.memoryUsage().rss,
    platform: process.platform,
    nodeVersion: process.version,
    timestamp: Date.now(),
    status: "STABLE",
  };

  return NextResponse.json(sys);
}