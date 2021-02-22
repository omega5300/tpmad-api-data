const { listen } = require('./src/app');

const port = process.env.port || 3000;

listen(port ,() => console.info('api on port:', port));