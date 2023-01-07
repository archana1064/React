import Employees from './Employees';
import React, { useInsertionEffect, useState,useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Delete(props)
{
    const[id, setId] = useState(' ');
    let navigate = useNavigate();
    const[users, setUsers] = useState({
        userName:" "
    });
    const handleClick = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8082/user/'+id, users)

        navigate('/')
    }
    useEffect(()=>{
        console.log('UseEffect Called')
       // setName(localStorage.getItem('name'));
       // setAge(localStorage.getItem('age'));
        setId(localStorage.getItem('id'));

    },[])
    
    return(
        <div>
            <form>
                
                onChange={(e)=>setUsers(prev=>({...prev, userName:e.target.value}))}<br/><br/>
            
            </form>
        </div>
    );
}

export default Delete;