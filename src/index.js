import express from 'express';
import router from './routes.js';

const PORT = 3000;
const hostname = 'localhost';

const app = express();

app.use(router);

app.listen(PORT, hostname, () => {
  console.log(`Server runing at http://${hostname}:${PORT}`);
});
