import React ,{useState} from 'react';

function Car(props) {
    const [myCar,setColor]=useState({
        year:'2009',
        brand:'Honda',
        model:'Pilot',
        color:'Black'

    });
    const [myFav,setmyFav]=useState("Eating")

    const Food=
    {
        myFav:"Eating"
    }

   const updateColor = (e)=>
   {
    setColor(previousState=>
        {return{...previousState,color:e.target.innerHTML}

        }); console.log(e.target.innerHTML)
   }
    

    return (
        <div>
            <h2>My car is {myCar.brand} {myCar.model}  make is {myCar.year} and the color is {myCar.color}</h2>
            <button onClick={(e)=>{setColor(previousState=>
            {return{...previousState,color:e.target.innerHTML}
            })
            console.log(e.target.innerHTML)
            }}>Red</button>
            <button onClick={updateColor}>Blue</button>
            <button onClick={updateColor}>Green</button>
            <button onClick={updateColor}>Yellow</button>

      
          
        
        </div>
    );
}

export default Car;