const { batchScrape } = require('../lib/scraper');

batchScrape(undefined, 5)
  .then(n => {
      console.log('Scraped:', n, 'tweets');
          process.exit(0);
            })
              .catch(e => {
                  console.error('Scrape failed:', e.message);
                      process.exit(1);
                        });
