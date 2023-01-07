import React, { useInsertionEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Search(props) {
    const[name, setName] = useState(' ');
    const[id, setId] = useState(' ');
   const[users, setUsers] = useState({
    userId:"",
    userName:""
});

    const handleClick = (e) => {
        e.preventDefault();
 
        axios.get('http://localhost:8082/user/'+id)
        .then(response => response.data)
      //  .then(data=>console.log(data))
        .then(data => setUsers(data))
        .catch(err => console.log(err));
       // console.log(users)
      
    }


    return (
        <div>
            
             <form>
                <input type ="number" id="id1" placeholder='Enter ID'
              onChange={(e)=>setId(e.target.value)}/><br/><br/>
                 <button onClick={(e)=>handleClick(e)} type="submit">Search</button>
               
            </form>
            
            <p1>User with id  {users.userId} and name  {users.userName} is present </p1>
           
          
         
           
          
            
            
        </div>
    
    );





                }







export default Search;

