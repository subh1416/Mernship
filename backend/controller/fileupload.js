// import path from 'path';
// import crypto from 'crypto';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
// import mongoose from 'mongoose';
import ENV from '../config.js';
// import Grid from 'gridfs-stream'




 function gridStorage(){
  const storageFS = new GridFsStorage({
    url : ENV.ATLAS_URI,
    file: (req,file)=>{
      return{
        filename: file.originalname,
        bucketName: "uploads"
      }
    }
  })

  let upload = multer({storage: storageFS})

  return upload
}

export default gridStorage()


//  const conn = mongoose.createConnection(ENV.FILE_UPLOAD_DB_URI,  { useUnifiedTopology: true })

//  let gfs 

//  conn.once('open', ()=>{
//    gfs = Grid(conn.db, mongoose.mongo)
//    gfs.collection('uploads')
//    console.log('GridFS bucket created successfully');
//  })

// const createStorageEngine  = () => {
// new GridFsStorage({
//   url: ENV.FILE_UPLOAD_DB_URI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads'
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// }

// const storage = createStorageEngine();
// const upload = multer({ storage,limits: {
//     fileSize: 200 * 1024 * 1024, // 10MB limit
//   },
// }); 

// // export default upload

//  async function fileUpload(req, res) {
//    try {
//      // Connect to the second database (Files)
//      // const db = await mongoose.connect(ENV.FILE_UPLOAD_DB_URI);
// //      const conn = mongoose.createConnection(ENV.FILE_UPLOAD_DB_URI)
// //      console.log('File Upload Database Connected');
   
// //      let gfs

// //  conn.once('open', ()=>{
// //    gfs = Grid(conn.db, mongoose.mongo)
// //    gfs.collection('uploads')
// //  })
//      // Upload a single file
//      upload.single('file')(req, res, (err) => {
//        if (err) {
//          console.error(err);
//          // Handle error
//        } else {
//          // File upload successful
//          console.log('File uploaded successfully');
//          // Additional logic or response handling
//        }
//      });

//      // Disconnect from the second database when done
//      await mongoose.disconnect();
//      console.log('File Upload Database Disconnected');
//    } catch (error) {
//      console.error(error);
//      // Handle error
//      res.status(500).json({ message: 'File upload failed' });
//    }
//  }

//  export { upload, fileUpload };

// async function fileUpload(req,res) {
//   
//   // Connect to the second database (Files)
//   const db = await mongoose.connect(ENV.FILE_UPLOAD_DB_URI);
//   console.log('File Upload Database Connected');

//   // Upload a single file
//   upload.single('file')(req, res, (err) => {
//     if (err) {
//       console.error(err);
//       // Handle error
//     } else {
//       // File upload successful
//       console.log('File uploaded successfully');
//       // Additional logic or response handling
//     }
  
//   });

//   // Disconnect from the second database when done
//   await mongoose.disconnect();
//   console.log('File Upload Database Disconnected');

// }

// fileUpload();

// export default upload;













// import path, { resolve } from 'path'
// import crypto from 'crypto'
// import multer from 'multer'
// import GridFsStorage from 'multer-gridfs-storage'
// // import mongoose from "mongoose";
// // import ENV from '../config.js';

// const storage = new GridFsStorage({
//   url: 'mongodb+srv://mernship:mernship7&R@mernship-1.n4vontn.mongodb.net/Files?retryWrites=true&w=majority',
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads'
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// const upload = multer({ storage });

//    export default upload
     




// // import mongoose from 'mongoose'
// // import multer from 'multer'
// // import GridFsStorage from 'multer-gridfs-storage'



// // const storage = new GridFsStorage({
// //   url: 'mongodb+srv://mernship:mernship7&R@mernship-1.n4vontn.mongodb.net/Files?retryWrites=true&w=majority',
// //   file: (req, file) => {
// //     return {
// //       bucketName: 'uploads',
// //       filename: file.originalname
// //     };
// //   }
// // });

// // const upload = multer({ storage });

// // export default upload