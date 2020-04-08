const express = require('express');
const fileUpload = require('express-fileupload');
import cors from 'cors';
import bodyParser from 'body-parser';

let port = process.env.PORT || 7777;

let app = express();

app.use(cors(),  
bodyParser.urlencoded({extended:true}),
bodyParser.json(), 
fileUpload());

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

app.listen(port, () => console.log('Server Started on', port));
