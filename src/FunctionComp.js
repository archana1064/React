import React, { useEffect,useState } from 'react';

function FunctionComp(props) {
    


  function Topfunct()
  { 
    const top ="First Component"
   console.log(top)
   

  }
  function Middlefunc()
  { 
    const middle ="Middle Component"
   console.log(middle)

  }
  function Bottonfunc()
  { 
    const bottom ="Bottom Component"
   console.log(bottom)

  }

useEffect(() =>
{
Topfunct();
 Middlefunc();
 Bottonfunc();
})




    return (
        <div>
          <h1>This is the function</h1>
        
        </div>
    );
}

export default FunctionComp;