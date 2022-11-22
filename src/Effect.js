import React ,{useState,useEffect} from 'react';

function Effect(props) {
    const[count , setCount]= useState(0)

    useEffect(()=>{
        setTimeout(()=>
        {
            setCount(count+1)
        },3000)
    })
    return (
        <div>
            <p1>
                The total number of count is {count}
            </p1>
        </div>
    );
}

export default Effect;