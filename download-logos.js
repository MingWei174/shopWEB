const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = {
  'visa.svg': 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
  'mastercard.svg': 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
  'jcb.svg': 'https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg',
  'apple-pay.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/512px-Apple_Pay_logo.svg.png',
  'familymart.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/FamilyMart_Logo.svg/512px-FamilyMart_Logo.svg.png',
  '7-eleven.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/7-eleven_logo.svg/512px-7-eleven_logo.svg.png',
  'line-pay.png': 'https://upload.wikimedia.org/wikipedia/zh/thumb/3/36/LINE_Pay_logo.svg/512px-LINE_Pay_logo.svg.png' // Changed to LINE Pay logo
};

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest) {
  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  };

  https.get(url, options, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
      download(res.headers.location, dest);
    } else if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
    } else {
      console.error(`Error downloading ${dest}: Status ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${dest}: ${err.message}`);
  });
}

Object.entries(logos).forEach(([filename, url]) => {
  const dest = path.join(dir, filename);
  download(url, dest);
});

console.log("Downloading logos with User-Agent...");
