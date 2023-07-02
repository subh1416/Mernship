import { Router } from "express";
const router = Router();
import * as controller from "../controller/appController.js";
import Auth, { localVariables } from "../middleware/auth.js";
import { registerMail } from "../controller/mailer.js";




// POST Method
router.post("/register",controller.register );
router.post("/registerMail", registerMail);
router.post("/authenticate", controller.verifyUser, (req, res) => {
  res.end();
});

router.post("/login", controller.verifyUser, controller.login);
router.post("/emailin", controller.verifyEmail, controller.emailin);

//GET method
router.get("/users/", controller.getUser);
router.get("/user/:email", controller.getEmail);
router.get(
  "/generateOTP",
  controller.verifyEmail,
  localVariables,
  controller.generateOTP
);

router.get("/verifyOTP", controller.verifyOTP);

router.get("/createResetSession", controller.createResetSession);

//PUT method
router.put("/updateuser", Auth, controller.updateUser);

router.put("/resetPassword", controller.verifyEmail, controller.resetPassword);

export default router;
