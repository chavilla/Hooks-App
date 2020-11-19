import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';


const FormWithCustomHook = () => {

    
    const [{name,email,password},handleChange]=useForm({
        name:'',
        email:'',
        password:''
    });

    useEffect(() => {
        console.log('Email cambio');
    },[email]);

    const handleSubmit=(e)=>{

        e.preventDefault();

        console.log(email,name,password);

    }


    return ( 
        <>
        <h1>UseEffect</h1>
        <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <input
            type='text'
            name='name'
            className='form-control w-50'
            value={ name }
            onChange={ handleChange }
            />
        </div>
        <div className='form-group'>
            <input
            type='text'
            name='email'
            className='form-control w-50'
            value={ email }
            onChange={ handleChange }
            />
        </div>
        <div className='form-group'>
            <input
            type='password'
            name='password'
            className='form-control w-50'
            value={ password }
            onChange={ handleChange }
            />
        </div>
        <input type='submit' value='Enviar'/>
        </form>
        </>
     );
}
 
export default FormWithCustomHook;