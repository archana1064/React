import React ,{useState,useEffect,useRef} from 'react';

function RefHook(props) {
    const [input,setInput]=useState(" ");
    const count=useRef(0);


    useEffect(()=>{
        count.current=input

    })
    

    
    return ( 
        <div>
            <input type={"text"}
            value={input}
            onChange={(e)=>setInput(e.target.value)}/>
            <h1>I have rendered {count.current}</h1>
            <h2>current value {input}</h2>
            <h2>previous value{count.current}</h2>
        </div>
    );
}

export default RefHook;