// Returns daily visit counts for the last 365 days. Protected by the ADMIN_PASSWORD env var.
const { redis, lastDays } = require('./_redis');

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    res.status(500).json({ error: 'ADMIN_PASSWORD is not set on the server' });
    return;
  }
  if (req.headers['x-admin-password'] !== expected) {
    res.status(401).json({ error: 'Wrong password' });
    return;
  }

  try {
    const days = lastDays(365);
    const counts = await redis(['MGET', ...days.map(day => `visits:${day}`)]);
    res.status(200).json({
      days: days.map((date, i) => ({ date, count: Number(counts[i]) || 0 }))
    });
  } catch (err) {
    console.error('stats failed:', err.message);
    res.status(500).json({ error: 'Could not load statistics' });
  }
};
