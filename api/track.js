// Records one visit: where the visitor came from (source) and the first page they opened.
// Each day is a Redis hash "day:YYYY-MM-DD" with fields like "s:google" (source) and "p:menu" (landing page).
const { redis, dayKey } = require('./_redis');

const BOT_PATTERN = /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|preview|lighthouse|headless/i;
const PAGES = ['home', 'menu', 'hotel', 'mariage', 'gateau'];
const OWN_SITES = /(^|\.)hostelleriesanaga\.com$|\.vercel\.app$|^localhost$/;

// Turn the referring site into one of the sources shown on the dashboard
function classify(referrer, page, fromQr) {
  if (fromQr) return 'qr';
  const host = String(referrer || '').toLowerCase();
  if (!host || OWN_SITES.test(host)) {
    // The printed QR codes open the homepage with no referrer
    return page === 'home' ? 'qr' : 'direct';
  }
  if (/^mail\.google\./.test(host)) return 'website';
  if (/google/.test(host)) return 'google';
  if (/(^|\.)(bing|yahoo|duckduckgo|ecosia|yandex|qwant|search\.brave|baidu)\./.test(host)) return 'search';
  if (/facebook|(^|\.)fb\.|messenger/.test(host)) return 'facebook';
  if (/instagram/.test(host)) return 'instagram';
  if (/tiktok|musical\.ly/.test(host)) return 'tiktok';
  if (/whatsapp/.test(host)) return 'whatsapp';
  if (/(^|\.)(t\.co|twitter\.com|x\.com|linkedin|youtube|snapchat|pinterest|telegram|reddit)/.test(host)) return 'social';
  return 'website';
}

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

  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (err) { body = {}; }
  }
  const page = PAGES.includes(body.page) ? body.page : 'home';
  const source = classify(body.ref, page, body.qr === true);

  // "l:<page>" counts landing pages for visitors who did not come from a QR code
  const fields = [`s:${source}`, `p:${page}`];
  if (source !== 'qr') fields.push(`l:${page}`);

  try {
    await redis([
      'EVAL',
      "for _, field in ipairs(ARGV) do redis.call('HINCRBY', KEYS[1], field, 1) end return 1",
      '1',
      `day:${dayKey(new Date())}`,
      ...fields
    ]);
    res.status(204).end();
  } catch (err) {
    console.error('track failed:', err.message);
    res.status(500).json({ error: 'Could not record visit' });
  }
};

module.exports.classify = classify;
