import React from 'react';
import { notFound } from 'next/navigation';

interface Params{
    params: {
        user_id: number
    }
}

interface User{
    id: string;
    name: string;
    email: string;
}

export default async function UserDetails({ params: { user_id } } : Params) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const user : User = await res.json();

    console.log(user_id)

    if(!user.id){
        notFound();
    }

  return (
    <div>
        <h1>User Details</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <td>{user.id}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{user.email}</td>
                </tr>
            </thead>
        </table>
    </div>
  )
}
