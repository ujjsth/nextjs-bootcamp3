import Link from 'next/link'
import React from 'react'

interface User{
  id: number;
  name: string;
  email:string
}

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const userDatas : User[] = await res.json();

  return (
    <>
      
      <div className='py-5 flex justify-between items-center'>
        <div>UsersPage</div>
        <Link href="/admin/users/create" className='btn btn-success'>Create User</Link>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            userDatas.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link href={`/admin/users/${user.id}`} className='btn btn-primary'>View</Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}
