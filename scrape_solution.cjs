/**
 * TOKOPEDIA SCRAPER SCRIPT
 *
 * Karena sistem keamanan Tokopedia (Akamai Bot Manager) sangat ketat dan memblokir
 * browser headless atau request GraphQL yang skemanya kurang spesifik/tidak ditandatangani,
 * script ini menggunakan metode Headful Browser via Playwright + Stealth Plugin.
 *
 * [PENTING]
 * Untuk menjalankan script ini, pastikan Anda menjalankannya di environment LOKAL.
 * Untuk keamanan, jangan pernah membagikan atau mem-push cookie ke repository publik.
 *
 * Setup:
 * 1. npm install playwright-extra puppeteer-extra-plugin-stealth dotenv
 * 2. npx playwright install chromium
 * 3. Buat file .env dan isi dengan TOKOPEDIA_COOKIE="[VALUE COOKIE ANDA]"
 * 4. node scrape_solution.cjs
 */

require('dotenv').config();
const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();
chromium.use(stealth);

async function scrape() {
  console.log("Membuka browser stealth secara visual (Headful)...");

  // WAJIB `headless: false` untuk bypass Akamai di Tokopedia LOKAL
  const browser = await chromium.launch({
    headless: false,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--window-size=1920,1080',
    ]
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    viewport: { width: 1920, height: 1080 },
    locale: 'id-ID',
    timezoneId: 'Asia/Jakarta',
  });

  // Inject cookies dari environment variable
  const rawCookieStr = process.env.TOKOPEDIA_COOKIE || "";
  if (rawCookieStr) {
     const cookies = rawCookieStr.split(';').map(c => {
        const parts = c.trim().split('=');
        return {
           name: parts[0],
           value: parts.slice(1).join('='),
           domain: '.tokopedia.com',
           path: '/'
        };
     }).filter(c => c.name && c.value);

     if (cookies.length > 0) {
       await context.addCookies(cookies);
       console.log(`Menginjeksi ${cookies.length} cookies dari .env...`);
     }
  } else {
     console.log("⚠️ PERINGATAN: TOKOPEDIA_COOKIE tidak ditemukan di .env");
  }

  const page = await context.newPage();

  let productsFound = false;
  let extractedProducts = [];

  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('graphql') && response.request().method() === 'POST') {
      try {
        const text = await response.text();
        const data = JSON.parse(text);
        const responses = Array.isArray(data) ? data : [data];

        for (const item of responses) {
          if (item?.data?.SearchProductQueryV4?.data?.products) {
            const products = item.data.SearchProductQueryV4.data.products;
            if (products.length > 0) {
              productsFound = true;
              extractedProducts = products;
            }
          }
        }
      } catch (e) {
      }
    }
  });

  console.log("Navigasi ke halaman Tokopedia Search...");
  try {
    await page.goto('https://www.tokopedia.com/search?st=product&q=macbook%20pro%20m1', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    console.log("Menunggu data GraphQL di-load...");
    for (let i = 0; i < 15; i++) {
      if (productsFound) break;
      await page.waitForTimeout(1000);
      await page.evaluate(() => window.scrollBy(0, 300));
    }

    if (productsFound) {
      console.log(`\n✅ SUKSES! Berhasil mengekstrak ${extractedProducts.length} produk:\n`);
      extractedProducts.slice(0, 10).forEach((p, i) => {
        console.log(`${i+1}. ${p.name}`);
        console.log(`   Harga: ${p.price}`);
        console.log(`   Toko: ${p.shop.name} (${p.shop.city})`);
        console.log(`   URL: ${p.url}\n`);
      });
    } else {
      console.log("\n❌ API GraphQL tidak merespon produk. Bisa jadi terkena Captcha / blokir Akamai. \n");

      console.log("Fallback: Mencoba DOM Scraping dari HTML...");
      const domProducts = await page.evaluate(() => {
        const items = Array.from(document.querySelectorAll('.pcv3__info-content, [data-testid="divProductWrapper"], .prd_container-card'));
        return items.map(item => {
          const titleEl = item.querySelector('[data-testid="linkProductName"], .prd_link-product-name');
          const priceEl = item.querySelector('[data-testid="linkProductPrice"], .prd_link-product-price');
          return {
            title: titleEl ? titleEl.innerText : 'No title',
            price: priceEl ? priceEl.innerText : 'No price',
          };
        }).filter(p => p.title !== 'No title');
      });

      if(domProducts.length > 0) {
        console.log(`✅ Berhasil mengekstrak ${domProducts.length} produk dari DOM:`);
        domProducts.slice(0, 10).forEach((p, i) => {
          console.log(`${i+1}. ${p.title} - ${p.price}`);
        });
      } else {
        console.log(`❌ Ekstraksi dari DOM juga gagal (Hasil nihil). Pastikan script ini dijalankan di browser LOKAL dengan display.`);
      }
    }

  } catch(e) {
    console.log("Error navigasi:", e.message);
  }

  await browser.close();
}

scrape();
