//import { render } from '@testing-library/react';
import React ,{useState} from 'react';


function RctHook()
{
    const[car,setCar]= useState({
      brand: "Ford",
      color: "Red"  
    })

    const changeColor=()=>
    {
     
    }






return(
    <div>
<h1>Welcome from Hooks</h1>
<button onClick={(changeColor)}>Blue</button>
</div>
)

}






export default RctHook;