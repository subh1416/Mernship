import axios from 'axios';
import jwt_decode from 'jwt-decode';


axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;


/** Make API Requests */


/** To get username from Token */
export async function getUsername(){
    const token = localStorage.getItem('token')
    if(!token) return Promise.reject("Cannot find Token");
    let decode = jwt_decode(token)
    return decode;
}

/** authenticate function */
export async function authenticate(username){
    try {
        return await axios.post('/api/authenticate', { username })
    } catch (error) {
        return { error : "usr nhi h!!"}
    }
}

/** get User details */
export async function getUser(username) {
    try {
      const { data } = await axios.get(`/api/users/?username=${username}`);
      console.log(data);
      return { data };
    } catch (error) {
      return { error: "Password doesn't Match...!" };
    }
  }
  

export async function getEmail({ email }){
    try {
        const { data } = await axios.get(`/api/user/${email}`);
        return { data };
    } catch (error) {
        return { error : "Password doesn't Match...!"}
    }
}

/** register user function */
export async function registerUser(credentials){
    try {
        const { data : { msg }, status } = await axios.post(`/api/register`, credentials);

        let { username, email,UserType } = credentials;

        /** send email */
        if(status === 201){
            await axios.post('/api/registerMail', { username, userEmail : email,UserType, text : msg})
        }

        return Promise.resolve(msg)
    } catch (error) {
        return Promise.reject({ error })
    }
}

/** login function */
export async function verifyPassword({ username, password }){
    try {
        if(username){
            const { data } = await axios.post('/api/login', { username, password })
            return Promise.resolve({ data });
        }
    } catch (error) {
        return Promise.reject({ error : "Password doesn't Match...!"})
    }
}
export async function verifyEmail({ email }){
    try {
        if(email){
            const { data } = await axios.post('/api/emailin', {email })
            return Promise.resolve({ data });
        }
    } catch (error) {
        return Promise.reject({ error : "Email doesn't Match...!"})
    }
}

/** update user profile function */
export async function updateUser(response){
    try {
        
        const token = await localStorage.getItem('token');
        const data = await axios.put('/api/updateuser', response, { headers : { "Authorization" : `Bearer ${token}`}});

        return Promise.resolve({ data })
    } catch (error) {
        return Promise.reject({ error : "Couldn't Update Profile...!"})
    }
}

/** generate OTP */
export async function generateOTP(email){
    try {
        // const username = getUser();
        const {data : { code }, status } = await axios.get('/api/generateOTP', { params : { email }});

        // send mail with the OTP
        if(status === 201){
            let { data : { username }} = await getEmail({ email });
            let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
            await axios.post('/api/registerMail', { username : username ,userEmail: email, text, subject : "Password Recovery OTP"})
        }
        return Promise.resolve(code);
    } catch (error) {
        return Promise.reject({ error });
    }
}

/** verify OTP */
export async function verifyOTP({ email, code }){
    try {
       const { data, status } = await axios.get('/api/verifyOTP', { params : { email, code }})
       return { data, status }
    } catch (error) {
        return Promise.reject(error);
    }
}

/** reset password */
export async function resetPassword({ email, password }){
    try {
        const { data, status } = await axios.put('/api/resetPassword', { email, password });
        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}