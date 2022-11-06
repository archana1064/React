import React, { Component } from 'react';

class NameTest extends Component {
    constructor()
    {   super();
        this.state=
            {
             firstName:"",
             lastName:"",
             fullname:""
            }
        
        this.display=this.display.bind(this);
        this.display1=this.display1.bind(this);
        this.concat=this.concat.bind(this);
    }
    
    display(e)
    { 
        this.setState(
            {
                firstName:e.target.value
            
            }
    )
  
    }
    display1(e)
    { 
        this.setState(
            {
                lastName:e.target.value
            
            }
    )
  
    }
    concat()
    { 
        this.setState(
            {
               fullname:this.state.firstName+ '  ' + this.state.lastName
            }
        )
    }
    render() {
        return (
            <div>
                 <label>Enter First Name</label>
               <input type="text" onChange={this.display}></input>
               <label>Enter Last Name</label>
               <input type="text" onChange={this.display1}></input>
           
              <button onClick={this.concat}>Submit</button>
               <p>My name is:{this.state.fullname}</p>
              
            </div>
        );
    }
}

export default NameTest;