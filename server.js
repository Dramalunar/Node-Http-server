const chalk = require('chalk');
const http = require('http');


const host = 'localhost';
const port = 8000;


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const response = JSON.stringify({ name: 'David Almeida', message: 'Hola desde mi servidor' });
  res.end(response);
});


server.listen(port, host, () => {
  console.log(chalk.green(`Servidor escuchando en http://${host}:${port}`));
});
