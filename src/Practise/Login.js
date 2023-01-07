import React,{useState} from "react";
import Success from "./Success";
import { Navigate,useNavigate } from 'react-router-dom';

function Login(props)
{     
    const  [usrName,setusrName]=useState('')
    const  [password,setpassword]=useState('')
   
 const   chkValidate = (e) =>
    {   console.log(usrName)
       if(usrName=='Archana' && password=='abc')
       {
        alert("success")
        
        Navigate('/Success')
       }
       else
       {
        alert("failed")
       }
    }

return (<div>
 <form>
    <h1 style={{color:'gray'}}>functional component login page</h1>
    <label>Enter User Name: </label>
    <input type="text" placeholder="Enter user name" 
    onChange={(e)=>setusrName(e.target.value)} ></input>
    <br></br>
    <br></br>
    <label>Enter Password: </label> 
    <input type="text"  placeholder='Enter password'
    onChange={(e)=>setpassword(e.target.value)}></input>
    <br></br>
    <br></br>
    <button onClick= {(e)=> {chkValidate(e)}} style={{backgroundColor:'lightgreen'}}>Submit</button>
    </form>
    </div>);
}


export default Login;