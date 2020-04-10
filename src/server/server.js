import { readFile, writeFile } from 'fs-extra';
import cors from 'cors';
import bodyParser from 'body-parser';

const express = require('express');
const fileUpload = require('express-fileupload');

// init server port
let port = process.env.PORT || 7777;

let app = express();

app.use(cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  fileUpload());

// media file upload
app.post('/', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `${__dirname}/public/uploads/${file.name}` });

  });
});

// load state
app.post('/state', (req, res) => {

  readFile('./src/server/public/state.json', (err, data) => {
    if (err) throw err;
    let state = JSON.parse(data);
    console.log("state", state);
    if (req.state === null) {
      return res.status(400).json({ msg: 'State is empty' });
    }

    const serialisedState = req.state;

    res.json({ serialisedState: state });

  })
});

// save state
app.post('state', (req, res) => {

  let state = JSON.stringify(serialisedState);
  console.log("Write1", state);

  writeFile('./src/server/public/state.json', state, (err) => {
    let state = JSON.stringify(data);
    console.log("write", state);
    if (err) throw err;
    const serialisedState = req.state;

    res.json({ serialisedState: state });
  });
});

app.listen(port, () => console.log('Server Started on', port));
