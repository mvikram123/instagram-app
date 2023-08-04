import React, {useState,useContext} from "react";
import axios from "axios";
import  Context from "../context/Context";
import instaApi from "../utilities/instaApi";





const Signup=()=>{
    let[user,setUser]=useState({
        name:"", email:"", password:"", confirmPassword:"",
    })
    let[success,setSuccess]=useState("");
    // let [message,setMessage]=useState("");
    let[error,setError]=useState("");
    let{token,setToken}=useContext(Context);

    let{name,email,password,confirmPassword}=user;

    async function implementSignup(e){
        e.preventDefault();
        if(!name || !password || !confirmPassword || !email){

            setError("all fields are required");
            setSuccess("");
            return ;
        }
            else if(password !==confirmPassword){
            setError("password do not match");
            setSuccess("");
            return;
            }
        try{

      const response=  await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{name,email,password});
            // instaApi.post("/auth/signup",{name,email,password});
      setSuccess(response.data.message);
      setError("");
      setToken(response.data.data.token);
      console.log("successfully sign up");
      console.log(response.data);

        }
        catch(error){
            setError(error.response.data.message);
            setSuccess("");
        }
    }


    return (
        <div className="signup">
            {error && <h1>{error}</h1>}
            {success && <h1>{success}</h1>}
            {token && <h1>{token}</h1>}
            {/* {message && <h1>{message}</h1>} */}

            <form onSubmit={implementSignup}>
            <input type="text" placeholder="enter your name" 
             value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>

            <input type="email" placeholder="enter your email"

             value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>

            <input type="password" placeholder="enter your  password"
              value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/> 

              <input type="password" placeholder="enter your confirm  password"
              value={user.confirmPassword} onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}/>
              <br />
              <button type="submit">signup</button>
              </form>
              
        </div>
       
    )
}
export default Signup;