import { batchScrape } from '../lib/scraper';

batchScrape(undefined, 5)
  .then(n => {
    console.log('Scraped:', n, 'tweets');
    process.exit(0);
  })
  .catch((e: Error) => {
    console.error('Scrape failed:', e.message);
    process.exit(1);
  });
