import React, { Component } from "react"

class LoginSt extends Component
{ 
       User={
            userName:"",
            pwd:""
        }

    validate= () =>
    {
        if(this.User.userName=='Archana' && this.User.pwd=='abc')
        {  console.log(this.userName);
            console.log(this.pwd)
           alert("Success")
        }
        else 
        {
            alert(" User login Fail")
        }

    }
  render()
  {
    return <div>
        <h1 style={{color:'gray'}}>State component login page  </h1>
        <label>Enter User Name: </label>
        <input type='text' placeholder="Enter user name"
    onChange={(e)=>{this.setUser(this.User.userName=e.target.value)}} ></input>
        <br></br>
        <br></br>
        <label>Enter Password: </label>
        <input type='text' placeholder="Enter password"
    onChange={(e)=>{this.setUser(this.User.pwd=e.target.value)}}></input>
        <br></br>
        <br></br>
        <button  onClick={()=>{this.validate()}} style={{backgroundColor:'lightgreen'}}>Submit</button>  
        </div>
  }

}

export default LoginSt;