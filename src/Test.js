import React, { Component } from 'react';

class Test extends Component {
    constructor()
    {
   
        super();

          this.state=
          {
            id:'10',
            age:'100'

          };
          this.changeFunc=this.changeFunc.bind(this)
    }
   
     changeFunc()
    {
       this.setState({
            age:'20'})

  }
    render() {
     

        return (
            <div>
             <h1>This is a test component</h1>  
             <h2>
                My name is : {this.props.name}
               
             </h2>
             <p>
             My age is : {this.state.age}
             </p>
             <button onClick={this.changeFunc}>Change State</button>
            </div>
        );
    }
}

export default Test;