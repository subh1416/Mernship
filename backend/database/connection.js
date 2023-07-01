import mongoose  from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import ENV from '../config.js'
// import Grid from 'gridfs-stream';    // its use for crud operations with uploaded files

// const mongoURI = 'mongodb+srv://mernship:mernship7&R@mernship-1.n4vontn.mongodb.net/Files?retryWrites=true&w=majority';
// const conn = mongoose.createConnection(mongoURI);

// // Initialize GridFS
// let gfs;
// conn.once('open', () => {
//   // Init stream
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('uploads');
// });

async function connect(){
    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    mongoose.set('strictQuery',true)
    // const db = await mongoose.connect(getUri);
    const db = await mongoose.connect(ENV.ATLAS_URI);
    console.log('Database Connected')
    return db
  //    let gfs;
  // db.once('open', () => {
  //   gfs = Grid(db.db, mongoose.mongo);
  //   gfs.collection('uploads');
  //   console.log('GridFS Initialized');
  // });

  // return { gfs,db }

}

export default connect;



