import React ,{useContext} from 'react';

import{userContext} from './FunctionUser'


function Component2({}) {
    const user= useContext(userContext)
   
    return (
        <div>
            <h2> second user is {user}</h2>
        </div>
    );
}

export default Component2;