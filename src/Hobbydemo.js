
import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import React,{useEffect,useState} from 'react';

function Hobbydemo(props) {

    const [ color, setColor] = useState ("");

    const display = (e) => {
            const{value, checked} = e.target ;
            if(checked)
            {
               setColor(pState =>[...pState , value]) ;
            }
            else
            {
               setColor(pState => pState.filter(x => x!== value)) ;    
            }

    }
    return (
        
        <div>
            <h1>!</h1>
            <div>Here are the hobbies: {color.length? color.join('|'): null} </div>
          <input type="checkbox" value = "Sports" onChange={display}></input>Sports
         
          <input type="checkbox" value = "Music" onChange={display} ></input>
          <label>Music</label>
          <input type="checkbox" value = "Painting" onChange={display}></input>
          <label>Painting</label >
          <input type="checkbox"  value = "Cooking" onChange={display}></input>
          <label>Cooking</label>

        </div>
    );
}

export default Hobbydemo;