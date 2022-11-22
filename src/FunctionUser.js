import React ,{useState,createContext} from 'react';
import Component2 from './Component2';

export const userContext= createContext();

function FunctionUser(props) {
   

    const [user,setUser] = useState("David Miller")
    return (
       <userContext.Provider value={user}>
            <h1>User for second component is {user}</h1>
            <Component2 />
            </userContext.Provider>
    );
}


export default FunctionUser;