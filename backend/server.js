import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/connection.js';
import router from './router/route.js';
import routers from './router/adminroute.js';
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');


const port = 8000;

app.get('/', (req,res)=>{
    res.status(201).json("Home get request")

})

app.use('/api',router)
app.use(routers)

app.use("/uploads",express.static("./uploads"));

connect().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`Server connected to http://localhost:${port}`)
        })
        
    } catch (error) {
        console.log('Cannot connect to the server')
        
    }
}).catch(error => {
    console.log("Invalid database connection")
    // console.log(error)
} )


