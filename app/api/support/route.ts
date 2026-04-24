import { incrementSupportCount, readSupportCount } from "@/lib/appwrite-client";

let supportCount = 0;

function getSafeCount() {
  return Number.isFinite(supportCount) && supportCount >= 0 ? supportCount : 0;
}

export async function GET() {
  try {
    const persistedCount = await readSupportCount();
    if (typeof persistedCount === "number") {
      supportCount = persistedCount;
      return Response.json({ count: persistedCount });
    }
  } catch {
    // Fall back to in-memory count when Appwrite is unavailable.
  }

  return Response.json({ count: getSafeCount() });
}

export async function POST() {
  try {
    const persistedCount = await incrementSupportCount();
    if (typeof persistedCount === "number") {
      supportCount = persistedCount;
      return Response.json({ count: persistedCount });
    }
  } catch {
    // Fall back to in-memory count when Appwrite is unavailable.
  }

  supportCount = getSafeCount() + 1;
  return Response.json({ count: supportCount });
}
