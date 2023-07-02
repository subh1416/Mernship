import UserModel from "../model/User.model.js";

export async function addUser(req , res ){
    const {username , email , address , password ,mobile } = req.body;
   if (!username || !email || !address || !mobile || !password){
    res.status(422).json("plz filled the filed")
   }
 
   try{
    const userExist = await UserModel.findOne({email:email});
    if (userExist){
        return res.status(422).json({error:"Email Exist"});
    }
    
    const adduser= new UserModel({username , email , password , address ,mobile ,UserType: "user"});
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