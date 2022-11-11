import React, { Component } from 'react';

class Expense1 extends Component {
    constructor()
{super();
    this.state={
        childcare:0,
        mortgage:0,
        expense:0,
        budget:0,
        totalsav:0

    }
    this.calculate=this.calculate.bind(this);
    this.totalsaving=this.totalsaving.bind(this);
}

calculate(c)
{ if(c.target.id == "chld")
this.setState(
    {
        childcare:c.target.value
    })
   else if(c.target.id == "mtg")
this.setState(
    {
        mortgage:c.target.value
    })
    
    else if(c.target.id == "exp")
this.setState(
    {
        expense:c.target.value
    })
    else if(c.target.id == "bdgt")
    this.setState(
        {
            budget:c.target.value
        })
}
totalsaving()
{   this.setState({
    totalsav: parseInt(this.state.budget) - (parseInt(this.state.childcare)+parseInt(this.state.mortgage)+parseInt(this.state.expense))
})
}

    render() {
        return (
            <div>
                  <label>Budget</label>
            <input type="number" onChange={this.calculate} id="bdgt"></input>
              <label>Child-Care</label>
            <input type="number" onChange={this.calculate} id="chld"></input>
            <label>Mortgage</label>
            <input type="number" onChange={this.calculate} id="mtg"></input>
            <label>Expense</label>
            <input type="number" onChange={this.calculate} id="exp"></input>
            <button onClick={this.totalsaving}>Total Expense</button>  
            <p1>Total Expense is : {this.state.totalsav}</p1>
            </div>
        );
    }
}

export default Expense1;