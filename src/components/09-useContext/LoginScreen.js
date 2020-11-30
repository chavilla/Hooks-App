import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {

    //Ontener referencia al context
    const { user,setUser} = useContext(UserContext);
    
    //objeto con id y name
    const newUser={
        id:3,
        name:'Luis',
        email: 'lualchavi@hotmail.com'
    }

    return ( 
        <div className='container'>
            <p className='d-block mt-5'>Login</p>
            <button type='button'
            className='btn btn-primary'
            onClick={()=>setUser(newUser)}
            >
                Agregar Usuario
            </button>
            { JSON.stringify(user) }
        </div>
     );
}
 
export default LoginScreen;