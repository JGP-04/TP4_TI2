const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('indexalt.html', 'utf8', (err, data) => {
    if (err) {
      console.error(`Error leyendo el archivo indexalt.html:`, err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error interno del servidor');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Servidor activo en http://localhost:3000');
});