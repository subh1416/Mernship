import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ENV from "../config.js";
import otpGenerator from "otp-generator";

export async function verifyUser(req, res, next) {
  try {
    const { username } = req.method == "GET" ? req.query : req.body;
    let exist = await UserModel.findOne({ username });
    
    if (!exist) return res.status(404).send({ error: "Can't find user!" });
    next();
  } catch (error) {
    return res.status(404).send({ error: "Authentication Error" });
  }
}
export async function verifyEmail(req, res, next) {
  try {
    const { email } = req.method == "GET" ? req.query : req.body;
    let exist = await UserModel.findOne({ email });
    if (!exist) return res.status(404).send({ error: "Can't find user!" });
    next();
  } catch (error) {
    return res.status(404).send({ error: "Authentication Error" });
  }
}

export async function register(req, res) {
  try {
    const { username, password, profile, email,UserType } = req.body;

    // Check the existing user
    const existingUsername = await UserModel.findOne({ username });
    const existingEmail = await UserModel.findOne({ email });

    if (existingUsername) {
      throw new Error("Please use a unique username");
    }

    if (existingEmail) {
      throw new Error("Please use a unique email");
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new UserModel({
        username,
        password: hashedPassword,
        profile: profile || "",
        email,
        UserType
      });

      // Save the user to the database
      const result = await user.save();

      res.status(201).send({ msg: "User registered successfully" });
    } else {
      throw new Error("Password is required");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export async function login(req, res) {
  const { username, password, UserType } = req.body;

  try {
    await UserModel.findOne({ username })
      .then((user) => {
        bcrypt
          .compare(password, user.password)
          .then((passwordCheck) => {
            if (!passwordCheck)
              return res.status(400).send({ error: " don't have Password  " });

            const token = jwt.sign(
              {
                userId: user._id,
                username: user.username,
                userType: user.UserType
              },
              ENV.JWT_SECRET,
              { expiresIn: "24h" }
            );
            console.log("")

            return res.status(200).send({
              msg: "Login succesfull",
              username: user.username,
              userType: user.UserType,
              token,
            });
          })
          .catch((error) => {
            return res.status(400).send({ error: " Password doesn,t match " });
          });
      })
      .catch((error) => {
        return res.status(404).send({ error: " Username not found " });
      });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

export async function emailin(req, res) {
  const { email } = req.body;

  try {
    await UserModel.findOne({ email })
      .then((user) => {
      
        return res.status(200).send({
          msg: "Email Verified",
          email: user.email,
        
        });
      })
      .catch((error) => {
        return res.status(404).send({ error: " email not found " });
      });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

export async function getUser(req, res) {
  const { username } = req.query;



  try {
    if (!username) return res.status(501).send({ error: "Invalid Username" });

    const user = await UserModel.findOne({ username });

    if (!user)
      return res
        .status(501)
        .send({ error: "Couldn't Find the User through username" });

    /** remove password from user */
    // mongoose returns unnecessary data with the object, so convert it into JSON
    const { password, ...rest } = Object.assign({}, user.toJSON());

    return res.status(201).send(rest);
  } catch (error) {
    return res
      .status(404)
      .send({ error: "Cannot Find User Data through username" });
  }
}


export async function getEmail(req, res) {
  const { email } = req.params;

  try {
    if (!email) return res.status(501).send({ error: "Invalid email" });

    const user = await UserModel.findOne({ email });

    if (!user)
      return res.status(501).send({ error: "Couldn't Find the email" });

    /** remove password from user */
    // mongoose returns unnecessary data with the object, so convert it into JSON
    const { password, ...rest } = Object.assign({}, user.toJSON());

    return res.status(201).send(rest);
  } catch (error) {
    return res
      .status(404)
      .send({ error: "Cannot Find User Data through email" });
  }
}

export async function updateUser(req, res) {
  try {
    // const id = req.query.id;
    const { userId } = req.user;

    if (userId) {
      const body = req.body;

      // Update the data using the findOneAndUpdate method
      await UserModel.findOneAndUpdate({ _id: userId }, body);

      return res.status(201).send({ msg: "Record Updated...!" });
    } else {
      return res.status(401).send({ error: "User Not Found...!" });
    }
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
}

export async function generateOTP(req, res) {
  req.app.locals.OTP = await otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  res.status(201).send({ code: req.app.locals.OTP });
}

export async function verifyOTP(req, res) {
  const { code } = req.query;
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;
    return res.status(201).send({ msg: "Verified successfully" });
  }
  return res.status(400).send({ error: "Invalid OTP" });
}
export async function createResetSession(req, res) {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false;
    return res.status(200).send({ flag: req.app.locals.resetSession });
  }
  return res.status(440).send({ error: "session expired" });
}

export async function resetPassword(req, res) {
  try {
    if (!req.app.locals.resetSession) {
      return res.status(440).send({ error: "session expired" });
    }
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).send({ error: "email not found" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await UserModel.updateOne(
        { email: user.email },
        { password: hashedPassword }
      );

      // Reset session
      req.app.locals.resetSession = false;
      return res.status(201).send({ msg: "Record Updated...!" });
    } catch (error) {
      return res.status(500).send({ error: "Unable to hash password" });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}
