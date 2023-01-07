import React,{Component} from'react';


class Welcome extends Component{

    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red",
        Name:"Archana"};

      }
      static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol,Name:"Kumari" };
      }

    render()
    {
        return <h1>{this.state.Name} Favorite color is  {this.state.favoritecolor}</h1>
    }

}

export default Welcome;