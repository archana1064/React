import React, { useState } from 'react';

function Function_UseSt(props) {
const[color,setColor]=useState("Blue");
const[sports,setSports]=useState("Soccer");

    return (
        <div>
          <h3>The color is :{color}</h3>  
          Change Color<button onClick={()=>setColor("Red")}>Change</button>
        </div>
    );
}

export default Function_UseSt;