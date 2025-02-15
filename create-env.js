const fs = require('fs');
const path = './src/environments';

if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
}

const envFile = `export const environment = {
  production: true,
  apiUrl: '${process.env.API_URL}'
};`;

fs.writeFileSync(`${path}/environment.prod.ts`, envFile);
