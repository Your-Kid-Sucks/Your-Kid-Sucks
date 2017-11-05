require('dotenv').config();
const express = require('express');
const next = require('next');
const db = require('./database');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const api = express.Router();

  api.get('/', (req, res) => {
    res.send('Welcome to the API!!!');
  });

  api.get('/students?', (req, res) => {
    if(req.query.user !== undefined)
      db.getStudentssInClass(req.query.user).then((students) => {
        res.json(students)
      });
  });

  server.use('/api', api);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
