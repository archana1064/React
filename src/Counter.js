import React, { Component } from 'react';

class Counter extends Component {

    constructor(){
super();
this.state=
{
counter:0
};
this.count=this.count.bind(this)
    }

count()
{
    this.setState({
       //counter:'9'
    counter:this.state.counter+1
    }
        
    )

}
    
    render() {
        return (
            <div>
                New Counter
                <p>Number of times clicked is :{this.state.counter}</p>
                <button onClick={this.count}>Counter</button>
            </div>
        );
    }
}

export default Counter;