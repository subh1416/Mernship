import { Router } from "express";
const routerss = Router();
//import  {upload,fileUpload, gridStorage}  from '../controller/fileupload.js';
import  gridStorage  from '../controller/fileupload.js';
import mongodb from 'mongodb'
import connect from '../database/connection.js';

// let gfs;

// routerss.get('/files', (req, res) => {
// gfs.file.find( ).toArray ((err, file) => {
// // Check if files
// if (!file || file.length === 0) {
// return res.status (404).json({
// err: 'No files exist'
// });
// }
// // Files exist
// return res.json (file);
// });
// })

const ObjectID = mongodb.ObjectID;

// Get the MongoDB database object
const db = await connect();

// Get the GridFSBucket instance
const bucket = new mongodb.GridFSBucket(db);

routerss.get('/files', (req, res) => {
  bucket.find({}).toArray((err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving files' });
    }
    return res.json(files);
  });
});

// Get a specific file by ID
routerss.get('/files/:id', (req, res) => {
  const fileId = new ObjectID(req.params.id);
  const downloadStream = bucket.openDownloadStream(fileId);
  downloadStream.pipe(res);
});


routerss.post('/upload', gridStorage.single('file'), (req, res) => {
   if (req.file) {
    // File upload successful
    console.log('File uploaded successfully');
  // Additional logic or response handling for successful upload
    res.status(200).json({ file:req.file})       //message: 'File uploaded successfully' });
  } else {
    // No file uploaded or upload failed
    console.log('File upload failed');
    // Additional logic or response handling for failed upload
    res.status(400).json({ message: 'File upload failed' });
  }
}); 

// Delete a file by ID
routerss.delete('/files/:id', (req, res) => {
  const fileId = new ObjectID(req.params.id);
  bucket.delete(fileId, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting file' });
    }
    return res.status(200).json({ message: 'File deleted successfully' });
  });
});


export default routerss;