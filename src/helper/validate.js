import toast from 'react-hot-toast';
import { authenticate } from './helper';

export async function usernameValidate(values){
    const errors = usernameVerify({}, values);
   
    return errors;
}

export async function passwordValidate(values){
    const errors = passwordVerify({}, values);
    return errors;
}


function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error("Username Required")
    }
    else if(values.username.includes(" ")){
        error.username = toast.error("Invalid User")
    }
    return error;
}

function passwordVerify(error = {}, values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
    if(!values.password){
        error.password = toast.error("Password Required")
    }
    else if(values.password.includes(" ")){
        error.password = toast.error("Invalid password")
    }
    else if(values.password.length < 4){
        error.password = toast.error("Password should be more than 4 character")

    }
    else if(!specialChars.test(values.password)){
        error.password = toast.error("Password must contain atleast one special characters and numbers")
    }
    return error;
}



function emailVerify(errors = {}, values) {
  if (!values.email) {
    errors.email = 'Email Required...!';
    toast.error('Email Required...!');
  } else if (values.email.includes(' ')) {
    errors.email = 'Wrong Email...!';
    toast.error('Wrong Email...!');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address...!';
    toast.error('Invalid email address...!');
  }

  return errors;
}

  

export async function loginValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);


    if(values.username){
        const {status} =  await authenticate(values.username);
        if(status !== 200){
            errors.exist = toast.error("user doest not exists")
            // console.log(values.username)
        }

    }
   

    return errors;
}
export async function emailValidation(values){
    const errors = emailVerify({}, values);
   

    return errors;
}

export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirmpassword){
        errors.exist = toast.error("Password not match");
    }

    return errors;
}

export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    if(values.password !== values.confirmpassword){
        errors.exist = toast.error("Password not match");
    }
    emailVerify(errors, values);

    return errors;
}