const { batchScrape } = require('../lib/scraper');
batchScrape(undefined, 5)
  .then(n => { console.log('Scraped:', n); process.exit(0); })
  .catch(e => { console.error(e); process.exit(1); });
