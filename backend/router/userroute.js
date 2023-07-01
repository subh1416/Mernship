import { Router } from "express";
const routerss = Router();
import  {upload,fileUpload}  from '../controller/fileupload.js';


routerss.post('/upload', upload.single('file'), (req, res) => {
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

export default routerss;