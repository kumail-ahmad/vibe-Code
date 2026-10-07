const https = require('https');

function fetchJson(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', () => resolve(''));
  });
}

async function checkDetails() {
  // Let's search OpenStreetMap Nominatim or DuckDuckGo for exact address and postcode
  const query = 'One Shot Coffee 13 Camden High St London';
  console.log("Checking exact details...");
  
  // Fetch DDG api or page
  const data = await fetchJson(`https://html.duckduckgo.com/html/?q=${encodeURIComponent('One Shot Coffee 13 Camden High Street London NW1')}`);
  console.log("DDG Length:", data.length);
  
  const text = data.replace(/<[^>]+>/g, ' ');
  const matches = text.match(/(NW1\s?[0-9][A-Z]{2}|Camden High St[^\.\,\n]*|020\s?7267\s?5200)/gi);
  console.log("Matches found:", matches ? matches.slice(0, 10) : 'None');
  
  // Let's also check competitors in Camden area
  const compData = await fetchJson(`https://html.duckduckgo.com/html/?q=${encodeURIComponent('best cafes near Camden High Street London')}`);
  const compText = compData.replace(/<[^>]+>/g, ' ');
  console.log("Competitor text snippet:", compText.substring(0, 1000));
}

checkDetails();
