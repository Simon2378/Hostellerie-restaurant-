// Shared helpers for the visit counter (files starting with "_" are not exposed as API routes on Vercel).
// Works with the Upstash Redis integration from the Vercel Marketplace, which sets one of these env var pairs.
const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const TIME_ZONE = 'Africa/Douala';
const DAY_MS = 24 * 60 * 60 * 1000;

// Send one Redis command, e.g. redis(['INCR', 'visits:2026-10-27'])
async function redis(command) {
  if (!REDIS_URL || !REDIS_TOKEN) {
    throw new Error('Redis is not configured (missing KV_REST_API_URL / KV_REST_API_TOKEN)');
  }
  const response = await fetch(REDIS_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command)
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error);
  return data.result;
}

// Date as YYYY-MM-DD in Cameroon local time
function dayKey(date) {
  return date.toLocaleDateString('en-CA', { timeZone: TIME_ZONE });
}

// The last `count` days, oldest first, ending today
function lastDays(count) {
  const now = Date.now();
  const days = [];
  for (let i = count - 1; i >= 0; i--) {
    days.push(dayKey(new Date(now - i * DAY_MS)));
  }
  return days;
}

module.exports = { redis, dayKey, lastDays };
