// import express from 'express';
// import { readFile, writeFile } from 'fs';
// import { loadState, saveState } from '../app/state/localStorage';
// import {store} from '../app/store'; 
// import { persistedState } from '../app/store/index';

// let port = 9000;
// let app = express();

// app.listen(port,console.info("Server running, listening on port ", port));

// // readFile('/SynopticProject/src/server/test.json', (err, test) => {
// //     let data = JSON.parse(test);
// //     console.log(data);
// //     if (err) throw err;
// //   });

// // let data = JSON.stringify(test);

// let data = saveState(store.getState());
// console.log("data", data);
// // let data = persistedState;
// // let datastring = JSON.stringify(data);

// // writeFile('/SynopticProject/src/server/test.json', datastring, (err) => {
// //     console.log(datastring);
// //     if (err) throw err;
// //   });

const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  // if(file.mimetype !== 'video/mpeg' || file.mimetype !== 'audio/mpeg' || file.mimetype !== 'audio/wav' || file.mimetype !== 'audio/aac' || file.mimetype !== 'video/mp4' || file.mimetype !== 'video/x-msvideo'){
  //   return res.status(400).json({ msg: 'File type not allowed' });
  // }

  file.mv(`${__dirname}/public/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/public/${file.name}` });
  });
});

app.listen(5000, () => console.log('Server Started...'));
