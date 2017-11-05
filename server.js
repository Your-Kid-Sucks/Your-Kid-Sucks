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
    if(req.query.classroom !== undefined){
      if(req.query.classroom == '*') {
        var dat = db.getStudentsInAllClasses();
      } else {
        var dat = db.getStudentsInClass(req.query.classroom);
      }
      if(dat !== undefined) {
        dat.then((data) => {
        res.json(data)
        });
      } else {
        res.send('Error!');
      }
    }
  });

  api.get('/events?', (req, res) => {
    if(req.query.student !== undefined)

      var dat = db.getEventsByStudent(req.query.student);
      if(dat !== undefined) {
        dat.then((data) => {
        res.json(data)
        });
      } else {
        res.send('Error!');
      }
  })

  api.post('/event', function (req, res) {
   console.log(req.body);

   // db.editArticle()

   res.send("Success!");
 });

  server.use('/api', api);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((e)=>console.error(e));
