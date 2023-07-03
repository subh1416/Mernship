import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
 //For adduser by admin generate password. 
    const generatePassword = () => {
      const length = 10; // Length of the generated password
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numberChars = '0123456789';
      const specialChars = '!@#$%^&*()';
      let newPassword = '';
  
      // Ensure at least one capital letter
      newPassword += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
  
      // Ensure at least one special character
      newPassword += specialChars[Math.floor(Math.random() * specialChars.length)];
  
      // Ensure at least one number
      newPassword += numberChars[Math.floor(Math.random() * numberChars.length)];
  
      // Fill the rest of the password with random characters
      for (let i = 3; i < length; i++) {
        const charSet = lowercaseChars + uppercaseChars + numberChars + specialChars;
        newPassword += charSet[Math.floor(Math.random() * charSet.length)];
      }
  
      // Shuffle the password characters
      newPassword = newPassword.split('').sort(() => Math.random() - 0.5).join('');
  
      return (newPassword);
    };


export async function addUser(req , res ){
    const {username , email , address ,mobile } = req.body;
    const password = generatePassword();
    console.log("This is password");
    console.log(password);
   if (!username || !email || !address || !mobile){
    res.status(422).json("plz filled the filed")
   }
 
   try{
    const userExist = await UserModel.findOne({email:email});
    if (userExist){
        return res.status(422).json({error:"Email Exist"});
    }
    const encryptedPassword = await bcrypt.hash(password ,10);

    const adduser= new UserModel({username , email , address ,mobile , password:encryptedPassword ,UserType: "user"});
    await adduser.save();
    res.status(201).json({message:"user resigter"});

}catch(err){
    console.log(err);
}
}


export async function getdata(req, res) {
    try {
      const userdata = await UserModel.find({ UserType: 'user' });
      res.status(201).json( userdata );
    } catch (error) {
      res.status(422).json(error);
    }
  }
  

export async function getcountofusers(req, res) {
    try {
        const count = await UserModel.countDocuments({ UserType: 'user' });
              res.status(201).json( count );
    } catch (error) {
      res.status(422).json(error);
    }
  }
  

export async function getuser( req , res ){
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await UserModel.findById({_id:id});
       // console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
}

export async function updateuser(req ,res){
    try {
        const {id} = req.params;

        const updateduser = await UserModel.findByIdAndUpdate(id,req.body,{
            new:true
        });

        //console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
}

export async function deleteuser(req , res){
    try {
        const {id} = req.params;

        const deletuser = await UserModel.findByIdAndDelete({_id:id})
       // console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
}