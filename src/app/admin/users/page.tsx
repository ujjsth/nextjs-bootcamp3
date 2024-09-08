"use client"
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface User{
  id: number;
  name: string;
  email:string
}

export default function UsersPage() {
const [ userDatas, setUserDatas] = useState<User[]>();
  const fetchUsers = () =>{
    axios.get("http://localhost:3000/api/users")
    .then(data=>{
      setUserDatas(data.data)

    }).catch(err=>{
      console.log(err)
    })
  }

  const handleDelete =(id:any)=>{
    if(confirm("are u sure want to delte?")){
      axios.delete(`http://localhost:3000/api/users/${id}`)
      .then(data=>{
        setUserDatas(userDatas?.filter(user=> user.id != id))
  
      }).catch(err=>{
        console.log(err)
      })
    }
  } 

  useEffect(()=>{
    fetchUsers();
  },[])

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
            userDatas?.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link href={`/admin/users/${user.id}`} className='btn btn-primary'>View</Link>
                    <button
                      onClick={()=> handleDelete(user.id)}
                    className='btn btn-warning'>Delete</button>
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
