import Employees from './Employees';
import React, { useInsertionEffect, useState,useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Edit(props) {
    const[name, setName] = useState(' ');
    const[id, setId] = useState(' ');
    const[dept, setDept] = useState(' ');
    const[users, setUsers] = useState({
        userName:" ",
        deptName:" "
    });

    let navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8082/user/'+id, users)

        navigate('/')
    }
    useEffect(()=>{
        console.log('UseEffect Called')
        setName(localStorage.getItem('name'));
   
        setId(localStorage.getItem('id'));
        setDept(localStorage.getItem('dept'));

    },[])
    return (
        <div>
             <form>
                <input type ="text" placeholder='Enter Name'
                onChange={(e)=>setUsers(prev=>({...prev, userName:e.target.value}))}/><br/><br/>
                   <input type ="text" placeholder='Enter Dept'
                onChange={(e)=>setUsers(prev=>({...prev, deptName:e.target.value}))}/><br/><br/>
                <button onClick={(e)=>handleClick(e)} type="submit">Update</button>
            </form>
        </div>
    );
}

export default Edit;
