import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

    const [formState,setFormState]=useState({
        name:'',
        email:''
    });

    const { name, email }=formState

    useEffect(()=>{
        console.log('hey!');
    },[]);

    useEffect(()=>{
        console.log('formulario Cambió');
    },[formState]);

    useEffect(()=>{
        console.log('Email Cambió');
    },[email]);

    const handleChange=({target})=>{
        setFormState({
            ...formState,
            [target.name]:target.value
        });
    }

    return ( 
        <>
        <h1>UseEffect</h1>
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

        { (name==='123') && <Message/> }

        </>
     );
}
 
export default SimpleForm;