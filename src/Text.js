import React, { Component } from 'react';

class Text extends Component {
        constructor()
        {
            super();
            this.state={
                value:''
            }
          this.display=this.display.bind(this)
        }
        display(e)
        { 
          this.setState(
            {
             value:e.target.value
            }
          )
        }
    render() {
        return (
            <div>
                <input type="text" onChange={this.display}></input>
                <p>Input value is {this.state.value}</p>
            </div>
        );
    }

}

export default Text;