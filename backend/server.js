import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/connection.js';
import router from './router/route.js';
import routers from './router/adminroute.js';
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });


const port = 8000;

app.get('/', (req,res)=>{
    res.status(201).json("Home get request")

})

app.use('/api',router)
app.use(routers)

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


