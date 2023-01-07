import React , { useState } from 'react';

function FirstuseState(props)
{  
    const[color,setColor]=useState("Red");

     
    return<h1>Fav color is {color} {props.color} </h1>
}

export default FirstuseState;