import React,{Component,setState} from'react';


class Message extends Component{

 constructor()
 {
    super()
    this.state =
    {
      message: 'Welcome here',
      msg:'All done'
    }
 }

 changePreview(){
   this.setState({
    message: 'Thanks for subscribing'
   })
 }

 goBack()
 {
    this.setState({
        msg:'Going Back'
    })
 }
    render()
    {
        return(
            <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changePreview()}>Subscribe</button>
        <h2>{this.state.msg}</h2>
        <button onClick={()=> this.goBack()}>Go</button>
        </div>
        )
   
    }

}

export default Message;