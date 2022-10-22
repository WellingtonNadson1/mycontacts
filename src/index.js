import express from 'express';

const PORT = 3000;
const hostname = 'localhost';

const app = express();

app.get('/', (request, response) => {
  response.status(200);
  response.send('Olá Wellington');
});

app.listen(PORT, hostname, () => {
  console.log(`Server runing at http://${hostname}:${PORT}`);
});
