let supportCount = 0;

function getSafeCount() {
  return Number.isFinite(supportCount) && supportCount >= 0 ? supportCount : 0;
}

export async function GET() {
  return Response.json({ count: getSafeCount() });
}

export async function POST() {
  supportCount = getSafeCount() + 1;
  return Response.json({ count: supportCount });
}
