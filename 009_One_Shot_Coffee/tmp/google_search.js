const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-GB,en;q=0.9'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    }).on('error', (e) => resolve({ statusCode: 500, data: e.message }));
  });
}

async function run() {
  console.log("Searching Google...");
  const res1 = await fetchUrl('https://www.google.com/search?q=' + encodeURIComponent('One Shot Coffee 020 7267 5200 London'));
  console.log("Google Status:", res1.statusCode);
  
  // Extract search result titles and text snippets
  const text = res1.data.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  
  // Find phone, address, site mentions
  const lines = text.replace(/<[^>]+>/g, '\n').split('\n').map(l => l.trim()).filter(l => l.length > 0);
  console.log("Found lines:", lines.length);
  
  // Search for key terms
  const keywords = ['shot', 'coffee', 'camden', 'address', '020', 'street', 'london', 'instagram', 'facebook', 'hours', 'rating', 'review', 'menu'];
  const relevantLines = lines.filter(line => {
    const l = line.toLowerCase();
    return keywords.some(k => l.includes(k));
  });

  console.log("--- RELEVANT LINES (first 40) ---");
  console.log(relevantLines.slice(0, 40).join('\n'));
}

run();

