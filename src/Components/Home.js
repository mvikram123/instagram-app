
import React , {useContext, useEffect,useState} from "react";
import Context from "../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Home=()=>{
    let {token,setToken}=useContext(Context);
    let[message,setMessage]=useState("");
    let[error,setError]=useState("");
    let[success,setSuccess]=useState("");
    let[name,setName]=useState("");

    console.log("token=",token);
    const navigate = useNavigate();


    useEffect(
         ()=>{
            async function getZukuMessage(){
        try{
           let response=await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
                    headers:{
                        Authorization: `Bearer${token}`
                    }
                })
                setSuccess(response.data.message);
                setError("")
                setMessage(response.data.data.message);
                setName(response.data.data.user.name);
            }
            catch(error){
             setError(error.response.data.message);
            setSuccess("");
            }
        }
        getZukuMessage();

        },[]
    )
        function implementLogout(){
            axios.delete("https://instagram-express-app.vercel.app/api/auth/logout",{

                header :{
                    Authorization:`Bearer${token}`
                }
            })
            .then((response)=>{
                setError("");
                setMessage("");
                setSuccess("");
                setToken("");
                localStorage.removeItem("token");
                alert("logout successfully");
                setName("");

                // move to login page again
                navigate("/login");
            
            })
            .catch((error)=>{
                setError(error.response.data.message);
                setSuccess("");
            }
            )
        }

    return (

        <div>
             {error && <h1> {error}</h1>}
            <button  onClick={implementLogout}>Logout</button>
            <h1>Welcome to {name}</h1>
            <p>Zuko has a  message for you :{message}</p>
        </div>
    )
}
export default Home;