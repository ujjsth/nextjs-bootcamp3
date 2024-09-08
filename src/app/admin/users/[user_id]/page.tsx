"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Params{
    params: {
        user_id: string
    }
}

interface User{
    id: string;
    name: string;
    email: string;
}

export default function UserDetails({ params: { user_id } } : Params) {
    const [ userData, setUserData] = useState<User>();
    const fetchUser = () =>{
      axios.get(`http://localhost:3000/api/users/${user_id}`)
      .then(data=>{
        setUserData(data.data)
  
      }).catch(err=>{
        console.log(err)
      })
    }
  
    useEffect(()=>{
      fetchUser();
    })
  

  return (
    <div>
        <h1>User Details</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <td>{userData?.id}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{userData?.name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{userData?.email}</td>
                </tr>
            </thead>
        </table>
    </div>
  )
}
