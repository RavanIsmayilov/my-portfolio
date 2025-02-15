const fs = require('fs');
const envFile = `export const environment = {
    production: true,
    apiUrl: '${process.env.API_URL}'
};`;

fs.writeFileSync('./src/environments/environment.prod.ts', envFile);
console.log('✅ environment.prod.ts created successfully!');
