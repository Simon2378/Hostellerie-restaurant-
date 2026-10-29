// Records one homepage visit (the printed QR codes open the homepage).
const { redis, dayKey } = require('./_redis');

const BOT_PATTERN = /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|preview|lighthouse|headless/i;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const userAgent = req.headers['user-agent'] || '';
  if (BOT_PATTERN.test(userAgent)) {
    res.status(204).end();
    return;
  }

  try {
    await redis(['INCR', `visits:${dayKey(new Date())}`]);
    res.status(204).end();
  } catch (err) {
    console.error('track failed:', err.message);
    res.status(500).json({ error: 'Could not record visit' });
  }
};
