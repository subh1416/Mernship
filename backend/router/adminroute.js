import { Router } from "express";
const routers = Router();
import * as controller from "../controller/adminController.js";
//import Auth,{localVariables} from "../middleware/auth.js";

routers.post('/addUser' , controller.addUser );

routers.get("/getdata" , controller.getdata);

routers.get("/getuser/:id" , controller.getuser);

routers.patch("/updateuser/:id" , controller.updateuser);

routers.delete("/deleteuser/:id" , controller.deleteuser);


export default routers;

