import React,{useEffect,useState} from 'react';

function Hobby(props) {
    const [hobby, setHobbies] = useState([]);
    const display = (ev) =>
    {
      const {value, checked} = ev.target ;
        if (checked) {
            setHobbies(pState => [...pState, value]);
        }
        else {

            setHobbies(pState => pState.filter(x => x!== value) );
        }         


    }
 
    return (
        <div>
            <h1>My hobbies are-: 
            </h1>

            <div>Here are the hobbies: {hobby.length? hobby.join('|'): null} </div>
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

export default Hobby;