"use client"
import React, { useState } from 'react';

export default function CrateUser() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e:any) =>{
        setFormData(
            {
                ...formData,
                [e.target.name] :e.target.value
            }
        )
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault();
    }

  return (
    <div className='pt-[50px]'>
        <h1 className='mb-3 text-[30px]'>Create New User</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name='name' placeholder='Name' className='block input bg-black text-white'/>
            <input type="text" onChange={handleChange} name='email' placeholder='Email' className='block my-5 input bg-black text-white'/>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}
