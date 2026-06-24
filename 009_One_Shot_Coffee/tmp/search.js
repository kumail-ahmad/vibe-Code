const https = require('https');

function searchDDG(query) {
  return new Promise((resolve) => {
    const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (e) => resolve('ERROR: ' + e.message));
  });
}

async function run() {
  const queries = [
    'One Shot Coffee 020 7267 5200',
    'One Shot Coffee Camden High Street London',
    'One Shot Coffee London reviews instagram'
  ];

  for (const q of queries) {
    console.log('==== QUERY:', q, '====');
    const html = await searchDDG(q);
    
    // Extract titles, links, snippets
    const titleRegex = /<a class="result__a"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
    const snippetRegex = /<a class="result__snippet[^"]*"[^>]*>([\s\S]*?)<\/a>/g;
    
    let match;
    let count = 0;
    while ((match = titleRegex.exec(html)) !== null && count < 8) {
      const href = match[1];
      const title = match[2].replace(/<[^>]+>/g, '').trim();
      console.log(`[${count+1}] TITLE: ${title}`);
      console.log(`    URL: ${href}`);
      count++;
    }
    
    const snippets = [];
    let sMatch;
    while ((sMatch = snippetRegex.exec(html)) !== null) {
      snippets.push(sMatch[1].replace(/<[^>]+>/g, '').trim());
    }
    snippets.slice(0, 5).forEach((sn, idx) => {
      console.log(`[SNIPPET ${idx+1}] ${sn}`);
    });
  }
}

run();

