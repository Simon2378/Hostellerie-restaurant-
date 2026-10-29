// Returns daily visits by source and landing page for the last 3 years
// (enough to compare a year with the one before). Protected by the ADMIN_PASSWORD env var.
const { redis, lastDays } = require('./_redis');

// Reads every day's hash in a single Redis call
const READ_DAYS = "local out = {} for i, key in ipairs(KEYS) do out[i] = redis.call('HGETALL', key) end return out";

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
    const dates = lastDays(1096);
    const [hashes, legacy] = await Promise.all([
      redis(['EVAL', READ_DAYS, String(dates.length), ...dates.map(date => `day:${date}`)]),
      // Counts from before sources were tracked: homepage visits, shown as QR scans
      redis(['MGET', ...dates.map(date => `visits:${date}`)])
    ]);

    // Only days with visits are sent: { "2026-10-29": { s: { qr: 4, google: 2 }, p: { home: 4, menu: 2 }, l: { menu: 2 } } }
    // s = sources, p = landing pages (everyone), l = landing pages of visitors who did not scan a QR code
    const days = {};
    dates.forEach((date, i) => {
      const day = { s: {}, p: {}, l: {} };
      const fields = hashes[i] || [];
      for (let f = 0; f < fields.length; f += 2) {
        const [kind, name] = fields[f].split(':');
        if (day[kind]) day[kind][name] = Number(fields[f + 1]) || 0;
      }
      const old = Number(legacy[i]) || 0;
      if (old) {
        day.s.qr = (day.s.qr || 0) + old;
        day.p.home = (day.p.home || 0) + old;
      }
      if (Object.keys(day.s).length) days[date] = day;
    });

    res.status(200).json({ start: dates[0], today: dates[dates.length - 1], days });
  } catch (err) {
    console.error('stats failed:', err.message);
    res.status(500).json({ error: 'Could not load statistics' });
  }
};
