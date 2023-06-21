import { Router } from "express";
const router = Router();
import * as controller from "../controller/appController.js";
import Auth,{localVariables} from "../middleware/auth.js";
import { registerMail } from "../controller/mailer.js";

// POST Method
router.post("/register", controller.register);


router.post("/registerMail", registerMail
);
router.post("/authenticate", controller.verifyUser, (req, res) => {
  res.end();
});

router.post("/login", controller.verifyUser,controller.login);

//GET method
router.get("/user/:username", controller.getUser);

router.get("/generateOTP", controller.verifyUser,localVariables,controller.generateOTP);

router.get("/verifyOTP", controller.verifyOTP);

router.get("/createResetSession", controller.createResetSession);

//PUT method
router.put("/updateuser", Auth,controller.updateUser);

router.put("/resetPassword", controller.verifyUser ,controller.resetPassword);

export default router;
