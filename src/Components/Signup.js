import {React, useState} from "react";
import axios from "axios";




const Signup=()=>{
    let[user,setUser]=useState({
        name:"", email:"", password:"", confirmPassword:"",
    })
    let[success,setSuccess]=useState("");
    let[error,setError]=useState("");
    let[token,setToken]=useState("")

    let{name,email,password,confirmPassword}=user;

    async function implementSignup(e){
        e.preventDefault();
        if(!name || !password || !confirmPassword || !email){

            setError("fill all required fields");
            setSuccess("");
            return ;
        }
            else if(!password !==confirmPassword){
            setError("password do not match");
            setSuccess("");
            return;
            }
        try{

      const response=  await axios.post(" ",{name,email,password});
      setSuccess(response.data.message);
      setError("");
      setToken(response.data.data.token);

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

            <form onSubmit={implementSignup}>
            <input type="text" placeholder="enter your name" 
             value={user.name} onClick={(e)=>setUser({...user,name:e.target.value})}/>

            <input type="email" placeholder="enter your email"

             value={user.email} onClick={(e)=>setUser({...user,email:e.target.value})}/>

            <input type="password" placeholder="enter your password"
              value={user.password} onClick={(e)=>setUser({...user,password:e.target.value})}/>
              </form>
              <button type="submit">signup</button>
        </div>
       
    )
}
export default Signup;