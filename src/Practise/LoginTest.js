import React, { Component } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import Success from './Success';
import Fail from './Fail';

class LoginTest extends Component {

    constructor()
    {    
        super();
        this.state={
            userName:'',
            pwd:''

        }

    }
   
    validate()
    {
        if(this.state.userName=='Tiger' && this.state.pwd=='abc')
        {  
            alert('success')
            Navigate('/Success')
           
        }
        else{
            Navigate('/Fail')    
        }

    }
    render() {
        return (
            <div>
                <h1 style={{color:'gray'}}>Tiger Login Page</h1>
                <label>Enter User Name: </label>
                <input type ="text" placeholder='Enter user name'
                onChange={(e)=>{this.setState(this.state.userName=e.target.value)}}></input><br></br>
                <br></br>
                <label>Enter Password: </label>
                <input type ="password" placeholder='Enter password'
                onChange={(e)=>{this.setState(this.state.pwd=e.target.value)}}></input><br></br>
                <br></br>
                <button type="submit" onClick={()=>{this.validate()}} style={{backgroundColor:'lightgreen'}}>Submit</button>
            </div>
        );
    }
}

export default LoginTest;